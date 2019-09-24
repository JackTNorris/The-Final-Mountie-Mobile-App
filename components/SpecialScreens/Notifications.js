import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Switch,
  BackHandler
} from 'react-native';
import Header from '../Header.js';
//import { Ionicons } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';
const myStyles = require('../../assets/styles.js');
var firebase = require('firebase');
var config = {
  apiKey: 'AIzaSyB_JrcF7ogRqsOo2h9jW0GrA5_vSMCdgLA',
  authDomain: 'mountie-mobile.firebaseapp.com',
  databaseURL: 'https://mountie-mobile.firebaseio.com',
  projectId: 'mountie-mobile',
  storageBucket: 'mountie-mobile.appspot.com',
  messagingSenderId: '269099119210',
  appId: '1:269099119210:web:ccbc6e962f9cdbed',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config); //ensures there's only one instance of the app running
}

var PushNotification = require('react-native-push-notification');
let myToken = "placeholder";


//new/////////////////////////////////////
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'Athletics',
    image: require('../../assets/icons/BottomTabNavigator/rugby-ball-selected.png')
  },
  {
    title: 'Academics', 
    image: require('../../assets/icons/BottomTabNavigator/books-stack-of-three-selected.png')
  },
  {
    title: 'Arts',
    image: require('../../assets/icons/BottomTabNavigator/music-note-selected.png')
  },
  {
    title: 'Miscellaneous',
    image: require('../../assets/icons/BottomTabNavigator/more-selected.png')
  },
];
/////////////////////



export default class Notifications extends React.Component {

  static navigationOptions = { header: null };
  constructor(props){
	  super(props);
	  
	  BackHandler.addEventListener('hardwareBackPress', this.doThisWhenPressBackButton)
  }

  state = {
    currentCategory: 'all',
	athleticsNotif: [],
    artsNotif: [],
    academicsNotif: [],
    miscellaneousNotif:[],
	activeSections: [],
	isLoaded: false
  };

  passCategory = value => {
    this.setState({ currentCategory: value });
  };
  
//////////////////////////////////

  assignState = (athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches) => {
	  this.setState({
		athleticsNotif: athDBSwitches,
		academicsNotif: acadDBSwitches,
		miscellaneousNotif: miscDBSwitches,
		artsNotif: artDBSwitches,
		isLoaded: true
	  })
	  
	  //this.props.setParentNotifState('athletics', athDBSwitches);
	  //this.props.setParentNotifState('arts', artDBSwitches);
	  //this.props.setParentNotifState('academics', acadDBSwitches);
	  //this.props.setParentNotifState('miscellaneous', miscDBSwitches);
  }
  
  populateArrays(assignStateFunction) {
	let token = this.props.screenProps.thisToken;
	let athRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/athleticsNotif');
	let artRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/artsNotif');
	let miscRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/miscellaneousNotif');
	let acadRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/academicsNotif');
	
	let artDBSwitches = [];
	let acadDBSwitches = [];
	let miscDBSwitches = [];
	let athDBSwitches = [];
	
	let artPromise = artRef.once('value', (data) => {
			data.forEach((item) => {
				artDBSwitches.push(item.val());
			})
		});
	let acadPromise = acadRef.once('value', (data) => {
				data.forEach((item) => {
					acadDBSwitches.push(item.val());
				})
			});
	let miscPromise = miscRef.once('value', (data) => {
					data.forEach((item) => {
						miscDBSwitches.push(item.val());
					})
				});
	let athPromise = athRef.once('value', (data) => {
		data.forEach((item) => {
			athDBSwitches.push(item.val());
		})
	});
	
	Promise.all([artPromise, acadPromise, miscPromise, athPromise]).then(() => {this.assignState(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches)});
  }


///////////////////////////////
  componentWillMount()
  {
	 this.populateArrays(this.assignState);
  }
  
  
  
  
  componentWillUnmount() {
	  let ref = firebase.database().ref('/appUsers/' + this.props.screenProps.thisToken);
	ref.child('notificationsPreferences').set({
		athleticsNotif: this.state.athleticsNotif,
		artsNotif: this.state.artsNotif,
		academicsNotif: this.state.academicsNotif,
		miscellaneousNotif: this.state.miscellaneousNotif
	});
    //this.props.navigation.goBack();
  }
  setParentStateForExporting = (category, arrayValue) => {
    switch(category)
    {
      case 'athletics':
      this.setState({athleticsNotif: arrayValue});
      break;
      case 'arts':
      this.setState({artsNotif: arrayValue});
      break;
      case 'miscellaneous':
      this.setState({miscellaneousNotif: arrayValue});
      break;
      case 'academics':
      this.setState({academicsNotif: arrayValue});
      break;
    }
  }
	
  doThisWhenPressBackButton = () => {
	  
    let ref = firebase.database().ref('/appUsers/' + this.props.screenProps.thisToken);
	ref.child('notificationsPreferences').set({
		athleticsNotif: this.state.athleticsNotif,
		artsNotif: this.state.artsNotif,
		academicsNotif: this.state.academicsNotif,
		miscellaneousNotif: this.state.miscellaneousNotif
	});
    this.props.navigation.goBack();
	return true;
    //Here, I'm going to push all my motha f'n data to the firebase yo!
  }
  
  
   // new code ////////////////////////////////////////////////////
    check(index) {
		if (index == 0) return 'Athletics';
			else if (index == 1) return 'Academics';
			else if (index == 2) return 'Arts';
			else if (index == 3) return 'Miscellaneous';
			else return 'Click to select a category...';
	}
	
   _renderContent = section => {
    return (
      <View style={{paddingTop: 5}}>
        <Text>Tap {this.check(this.state.activeSections)} to close </Text>
        <ModalDirectory eventCategory={this.state.activeSections}  setParentNotifState = {this.setParentStateForExporting} thisToken = {this.props.screenProps.thisToken} />
      </View>
    );
  };
  
    _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  
  _renderHeader = section => {
     
    return (
     
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {section.title}
          
        </Text>
        <Image
            source= {section.image}
            style={{ height: 50, width: 50  }}
          />
      </View>
    );
  };
  
  _renderSectionTitle = section => {
    return <View style={styles.content} />;
  };
  ///////////////////////////////////////////////////////////////////////
   
   
  render() {
	  if(this.state.isLoaded)
	  {
		return (
		  <View style={styles.container}>
			<Header backButton={true} />
			<View>
			  <ScrollView>
					<View
						style={{
							paddingBottom: 80,
							paddingLeft: 20,
							paddingRight:20,
							backgroundColor: '#ecf0f1',
						}}>
						<Text style = {styles.header}> Choose A Category... </Text>
						<Accordion
							sections={SECTIONS}
							activeSections={this.state.activeSections}
							renderSectionTitle={this._renderSectionTitle}
							renderHeader={this._renderHeader}
							renderContent={this._renderContent}
							onChange={this._updateSections}
						/>
			  
					</View>
				
			  </ScrollView>
			</View>
		  </View>
		);
		  
	  }
	  else 
	  {
		return (
		  <View style={styles.container}>
			<Header backButton={true} />
			<View>
			  <ScrollView>
					<View
						style={{
							paddingBottom: 30,
							paddingLeft: 20,
							paddingRight:20,
							backgroundColor: '#ecf0f1',
						}}>
						<Text style = {styles.header}> Please wait while we load your preferences... </Text>
					</View>
				
			  </ScrollView>
			</View>
		  </View>
		);
  
	  }
  }
}

class ModalDirectory extends React.Component {
  constructor(props) {
    super(props);
	let athDBSwitches = [];
	let artDBSwitches = [];
	let miscDBSwitches = [];
	let acadDBSwitches = [];
	this.populateArrays(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches, this.assignState);
    this.state = {
		isLoaded: false
		/*
		athleticSwitches: athDBSwitches,
		academicSwitches: acadDBSwitches,
		miscellaneousSwitches: miscDBSwitches,
		artSwitches: artDBSwitches
		*/
		/*
      athleticSwitches: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      academicSwitches: [false, false, false, false],
      artSwitches: [false, false, false, false, false],
      miscellaneousSwitches: [false, false, false]
	  */
    };
  }
  assignState = (athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches) => {
	  this.setState({
		athleticSwitches: athDBSwitches,
		academicSwitches: acadDBSwitches,
		miscellaneousSwitches: miscDBSwitches,
		artSwitches: artDBSwitches,
		isLoaded: true
	  })
	  /*
	  this.props.setParentNotifState('athletics', athDBSwitches);
	  this.props.setParentNotifState('arts', artDBSwitches);
	  this.props.setParentNotifState('academics', acadDBSwitches);
	  this.props.setParentNotifState('miscellaneous', miscDBSwitches);
	  */
  }
  
  populateArrays(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches, assignStateFunction) {
	let token = (this.props.thisToken) ? (this.props.thisToken) : "";
	let athRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/athleticsNotif');
	let artRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/artsNotif');
	let miscRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/miscellaneousNotif');
	let acadRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/academicsNotif');
	
	let artPromise = artRef.once('value', (data) => {
			data.forEach((item) => {
				artDBSwitches.push(item.val());
			})
		});
	let acadPromise = acadRef.once('value', (data) => {
				data.forEach((item) => {
					acadDBSwitches.push(item.val());
				})
			});
	let miscPromise = miscRef.once('value', (data) => {
					data.forEach((item) => {
						miscDBSwitches.push(item.val());
					})
				});
	let athPromise = athRef.once('value', (data) => {
		data.forEach((item) => {
			athDBSwitches.push(item.val());
		})
	});
	
	Promise.all([artPromise, acadPromise, miscPromise, athPromise]).then(() => {this.assignState(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches)});
  }
	
  renderNotificationSwitches(category) {
    let eventTypes = [];
    let notificationsArray = [];
    
    switch (category) {
      case 'athletics':
        eventTypes = [
          'Baseball',
          'Football',
          'Basketball',
          'Bowling',
          'Golf',
          'Track and Field',
          'Cross Country',
          'Tennis',
          'Wrestling',
          'Volleyball',
          'Soccer',
          'Cheer/Competitive Dance',
		  'Softball',
		  'Swim/Dive'
        ];
        notificationsArray = this.state.athleticSwitches;
        break;
      case 'academics':
        eventTypes = ['Tutoring', 'ACT', 'SAT', 'Assembly'];
        notificationsArray = this.state.academicSwitches;
        break;
      case 'miscellaneous':
        eventTypes = ['Pep Rally', 'School Dance', 'Club Meeting'];
        notificationsArray = this.state.miscellaneousSwitches;
        break;
      case 'arts':
        eventTypes = ['Choir', 'Orchestra', 'Band', 'Drama', 'Theatre Dance'];
        notificationsArray = this.state.artSwitches;
        break;
    }

    let returnComponents = [];
    eventTypes.sort();
    for (let i = 0; i < eventTypes.length; i++) {
      returnComponents.push(
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text style={{ fontSize: 15 }}>{eventTypes[i]}</Text>
          <Switch
            value={notificationsArray[i]}
			trackColor = {{false: null, true: 'blue'}}
			thumbColor = 'white'
            onValueChange={() => this.toggleAny(category, i)}
          />
        </View>
      );
    }
    return returnComponents;
  }

  //method for the on/off switch changing its own element to the opposite
  toggleAny = (category, index) => {
    let notifClone; //creates clone particular array in state
    switch (category) {
      case 'athletics':
        notifClone = this.state.athleticSwitches;
        break;
      case 'arts':
        notifClone = this.state.artSwitches;
        break;
      case 'academics':
        notifClone = this.state.academicSwitches;
        break;
      case 'miscellaneous':
        notifClone = this.state.miscellaneousSwitches;
        break;
    }
    //let nueva = this.state.notificationsArray.slice(); //creates clone of the state
    notifClone[index] = !notifClone[index];
	
    switch (category) {
      case 'athletics':
        this.setState({ athleticSwitches: notifClone });
        this.props.setParentNotifState('athletics', notifClone);
        break;
      case 'arts':
        this.setState({ artSwitches: notifClone });
        this.props.setParentNotifState('arts', notifClone);
        break;
      case 'academics':
        this.setState({ academicSwitches: notifClone });
        this.props.setParentNotifState('academics', notifClone);
        break;
      case 'miscellaneous':
        this.setState({ miscellaneousSwitches: notifClone });
        this.props.setParentNotifState('miscellaneous', notifClone);
        break;
    }
	/*
	this.props.setParentNotifState('athletics', this.state.athleticSwitches);
	this.props.setParentNotifState('arts', this.state.artSwitches);
	this.props.setParentNotifState('academics', this.state.academicSwitches);
	this.props.setParentNotifState('miscellaneous', this.state.miscellaneousSwitches);
	*/
  };

  render() {
	  if(!this.state.isLoaded){
		  return (
        <Text style={{ fontSize: 20, alignText: 'center', padding: 20 }}>
          Loading...
        </Text>
      );
	  }
    else if (this.props.eventCategory == 0) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('athletics')}</View>;
    } else if (this.props.eventCategory == 1) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('academics')}</View>;
    } else if (this.props.eventCategory == 2) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('arts')}</View>;
    } else if (this.props.eventCategory == 3) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('miscellaneous')}</View>;
    }

    //runs in the event that no category is selected
    else
      return (
        <Text style={{ fontSize: 20, padding: 20 }}>
          Please Select a notifications category to adjust settings.
        </Text>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  header: {
    flex: 1,
    
    paddingBottom:10,
    paddingTop:8,
    backgroundColor: '#ecf0f1',
    padding: 0,
    flexDirection: 'row',
    justifyContent:'space-between',
    borderBottomColor: '#142eef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    color: 'blue',
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
    
    
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  
});

/*
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Switch,
  BackHandler
} from 'react-native';
import Header from '../Header.js';
//import { Ionicons } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';
const myStyles = require('../../assets/styles.js');
var firebase = require('firebase');
var config = {
  apiKey: 'AIzaSyB_JrcF7ogRqsOo2h9jW0GrA5_vSMCdgLA',
  authDomain: 'mountie-mobile.firebaseapp.com',
  databaseURL: 'https://mountie-mobile.firebaseio.com',
  projectId: 'mountie-mobile',
  storageBucket: 'mountie-mobile.appspot.com',
  messagingSenderId: '269099119210',
  appId: '1:269099119210:web:ccbc6e962f9cdbed',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config); //ensures there's only one instance of the app running
}

var PushNotification = require('react-native-push-notification');
let myToken = "placeholder";


//new/////////////////////////////////////
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'Athletics',
    image: require('../../assets/icons/BottomTabNavigator/rugby-ball-selected.png')
  },
  {
    title: 'Academics', 
    image: require('../../assets/icons/BottomTabNavigator/books-stack-of-three-selected.png')
  },
  {
    title: 'Arts',
    image: require('../../assets/icons/BottomTabNavigator/music-note-selected.png')
  },
  {
    title: 'Miscellaneous',
    image: require('../../assets/icons/BottomTabNavigator/more-selected.png')
  },
];
/////////////////////



export default class Notifications extends React.Component {

  static navigationOptions = { header: null };
  constructor(props){
	  super(props);
	  
	  BackHandler.addEventListener('hardwareBackPress', this.doThisWhenPressBackButton)
  }

  state = {
    currentCategory: 'all',
	athleticsNotif: [],
    artsNotif: [],
    academicsNotif: [],
    miscellaneousNotif:[],
	activeSections: []
  };

  passCategory = value => {
    this.setState({ currentCategory: value });
  };
  componentWillUnmount() {
	  let ref = firebase.database().ref('/appUsers/' + this.props.screenProps.thisToken);
	ref.child('notificationsPreferences').set({
		athleticsNotif: this.state.athleticsNotif,
		artsNotif: this.state.artsNotif,
		academicsNotif: this.state.academicsNotif,
		miscellaneousNotif: this.state.miscellaneousNotif
	});
    //this.props.navigation.goBack();
  }
  setParentStateForExporting = (category, arrayValue) => {
    switch(category)
    {
      case 'athletics':
      this.setState({athleticsNotif: arrayValue});
      break;
      case 'arts':
      this.setState({artsNotif: arrayValue});
      break;
      case 'miscellaneous':
      this.setState({miscellaneousNotif: arrayValue});
      break;
      case 'academics':
      this.setState({academicsNotif: arrayValue});
      break;
    }
  }
	
  doThisWhenPressBackButton = () => {
	  
    let ref = firebase.database().ref('/appUsers/' + this.props.screenProps.thisToken);
	ref.child('notificationsPreferences').set({
		athleticsNotif: this.state.athleticsNotif,
		artsNotif: this.state.artsNotif,
		academicsNotif: this.state.academicsNotif,
		miscellaneousNotif: this.state.miscellaneousNotif
	});
    this.props.navigation.goBack();
	return true;
    //Here, I'm going to push all my motha f'n data to the firebase yo!
  }
  
  
   // new code ////////////////////////////////////////////////////
    check(index) {
		if (index == 0) return 'Athletics';
			else if (index == 1) return 'Academics';
			else if (index == 2) return 'Arts';
			else if (index == 3) return 'Miscellaneous';
			else return 'Click to select a category...';
	}
   _renderContent = section => {
    return (
      <View style={{paddingTop: 5}}>
        <Text>Tap {this.check(this.state.activeSections)} to close </Text>
        <ModalDirectory eventCategory={this.state.activeSections} />
      </View>
    );
  };
    _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  
  _renderHeader = section => {
     
    return (
     
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {section.title}
          
        </Text>
        <Image
            source= {section.image}
            style={{ height: 50, width: 50  }}
          />
      </View>
    );
  };
  
  _renderSectionTitle = section => {
    return <View style={styles.content} />;
  };
  ///////////////////////////////////////////////////////////////////////
   
   
  render() {
    return (
      <View style={styles.container}>
        <Header backButton={true} />
        <View>
          <ScrollView>
			
            <ModalDropdown
              defaultValue="Click to select a category..."
              options={['Athletics', 'Academics', 'Arts', 'Miscellaneous']}
              style={{ padding: 20, backgroundColor: '#f2f2f2' }}
              textStyle={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}
              dropdownTextStyle={{ fontSize: 20, color: 'black' }}
              dropdownTextHighlightStyle="blue"
              onSelect={this.passCategory}
            />
				<ModalDirectory setParentNotifState = {this.setParentStateForExporting} eventCategory={this.state.currentCategory} thisToken = {this.props.screenProps.thisToken}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

class ModalDirectory extends React.Component {
  constructor(props) {
    super(props);
	let athDBSwitches = [];
	let artDBSwitches = [];
	let miscDBSwitches = [];
	let acadDBSwitches = [];
	this.populateArrays(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches, this.assignState);
	
    this.state = {
		isLoaded: false
		/*
		athleticSwitches: athDBSwitches,
		academicSwitches: acadDBSwitches,
		miscellaneousSwitches: miscDBSwitches,
		artSwitches: artDBSwitches
		*/
		/*
      athleticSwitches: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      academicSwitches: [false, false, false, false],
      artSwitches: [false, false, false, false, false],
      miscellaneousSwitches: [false, false, false]
	  
    };
  }
  assignState = (athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches) => {
	  this.setState({
		athleticSwitches: athDBSwitches,
		academicSwitches: acadDBSwitches,
		miscellaneousSwitches: miscDBSwitches,
		artSwitches: artDBSwitches,
		isLoaded: true
	  })
	  this.props.setParentNotifState('athletics', athDBSwitches);
	  this.props.setParentNotifState('arts', artDBSwitches);
	  this.props.setParentNotifState('academics', acadDBSwitches);
	  this.props.setParentNotifState('miscellaneous', miscDBSwitches);
  }
  
  populateArrays(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches, assignStateFunction) {
	let token = (this.props.thisToken) ? (this.props.thisToken) : "";
	let athRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/athleticsNotif');
	let artRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/artsNotif');
	let miscRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/miscellaneousNotif');
	let acadRef = firebase.database().ref('/appUsers/' + token + '/notificationsPreferences/academicsNotif');
	
	let artPromise = artRef.once('value', (data) => {
			data.forEach((item) => {
				artDBSwitches.push(item.val());
			})
		});
	let acadPromise = acadRef.once('value', (data) => {
				data.forEach((item) => {
					acadDBSwitches.push(item.val());
				})
			});
	let miscPromise = miscRef.once('value', (data) => {
					data.forEach((item) => {
						miscDBSwitches.push(item.val());
					})
				});
	let athPromise = athRef.once('value', (data) => {
		data.forEach((item) => {
			athDBSwitches.push(item.val());
		})
	});
	
	Promise.all([artPromise, acadPromise, miscPromise, athPromise]).then(() => {this.assignState(athDBSwitches, artDBSwitches, miscDBSwitches, acadDBSwitches)});
  }
	
  renderNotificationSwitches(category) {
    let eventTypes = [];
    let notificationsArray = [];
    
    switch (category) {
      case 'athletics':
        eventTypes = [
          'Baseball',
          'Football',
          'Basketball',
          'Bowling',
          'Golf',
          'Track and Field',
          'Cross Country',
          'Tennis',
          'Wrestling',
          'Volleyball',
          'Soccer',
          'Cheer/Competitive Dance',
		  'Softball',
		  'Swim/Dive'
        ];
        notificationsArray = this.state.athleticSwitches;
        break;
      case 'academics':
        eventTypes = ['Tutoring', 'ACT', 'SAT', 'Assembly'];
        notificationsArray = this.state.academicSwitches;
        break;
      case 'miscellaneous':
        eventTypes = ['Pep Rally', 'School Dance', 'Club Meeting'];
        notificationsArray = this.state.miscellaneousSwitches;
        break;
      case 'arts':
        eventTypes = ['Choir', 'Orchestra', 'Band', 'Drama', 'Theatre Dance'];
        notificationsArray = this.state.artSwitches;
        break;
    }

    let returnComponents = [];
    eventTypes.sort();
    for (let i = 0; i < eventTypes.length; i++) {
      returnComponents.push(
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text style={{ fontSize: 15 }}>{eventTypes[i]}</Text>
          <Switch
            value={notificationsArray[i]}
			trackColor = {{false: null, true: 'blue'}}
			thumbColor = 'white'
            onValueChange={() => this.toggleAny(category, i)}
          />
        </View>
      );
    }
    return returnComponents;
  }

  //method for the on/off switch changing its own element to the opposite
  toggleAny = (category, index) => {
    let notifClone; //creates clone of the state
    switch (category) {
      case 'athletics':
        notifClone = this.state.athleticSwitches;
        break;
      case 'arts':
        notifClone = this.state.artSwitches;
        break;
      case 'academics':
        notifClone = this.state.academicSwitches;
        break;
      case 'miscellaneous':
        notifClone = this.state.miscellaneousSwitches;
        break;
    }
    //let nueva = this.state.notificationsArray.slice(); //creates clone of the state
    notifClone[index] = !notifClone[index];
	
    switch (category) {
      case 'athletics':
        this.setState({ athleticSwitches: notifClone });
        this.props.setParentNotifState('athletics', notifClone);
        break;
      case 'arts':
        this.setState({ artSwitches: notifClone });
        this.props.setParentNotifState('arts', notifClone);
        break;
      case 'academics':
        this.setState({ academicSwitches: notifClone });
        this.props.setParentNotifState('academics', notifClone);
        break;
      case 'miscellaneous':
        this.setState({ miscellaneousSwitches: notifClone });
        this.props.setParentNotifState('miscellaneous', notifClone);
        break;
    }
	
	this.props.setParentNotifState('athletics', this.state.athleticSwitches);
	this.props.setParentNotifState('arts', this.state.artSwitches);
	this.props.setParentNotifState('academics', this.state.academicSwitches);
	this.props.setParentNotifState('miscellaneous', this.state.miscellaneousSwitches);
  };

  render() {
	  if(!this.state.isLoaded){
		  return (
        <Text style={{ fontSize: 20, alignText: 'center', padding: 20 }}>
          Loading...
        </Text>
      );
	  }
    else if (this.props.eventCategory == 0) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('athletics')}</View>;
    } else if (this.props.eventCategory == 1) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('academics')}</View>;
    } else if (this.props.eventCategory == 2) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('arts')}</View>;
    } else if (this.props.eventCategory == 3) {
      return <View style = {{marginBottom: 100}}>{this.renderNotificationSwitches('miscellaneous')}</View>;
    }

    //runs in the event that no category is selected
    else
      return (
        <Text style={{ fontSize: 20, padding: 20 }}>
          Please Select a notifications category to adjust settings.
        </Text>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  
  
  

});
*/



