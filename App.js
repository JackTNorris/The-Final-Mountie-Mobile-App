import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  Alert
} from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
//the icons used at the bottom tabNavigator
import AcademiaScreen from './components/MainScreens/AcademiaScreen';
import AthleticsScreen from './components/MainScreens/AthleticsScreen';
import ArtsScreen from './components/MainScreens/ArtsScreen';
import MiscellaneousScreen from './components/MainScreens/MiscellaneousScreen';
import HomeScreen from './components/MainScreens/HomeScreen';
import LoadingScreen from './components/LoadingScreen'; //initial viewing screen
import SettingScreen from './components/SpecialScreens/SettingsScreen.js';
import Calendar from './components/SpecialScreens/Calendar.js';
import SearchBar from './components/SpecialScreens/SearchBar.js';
import MoreLinks from './components/SpecialScreens/MoreLinks.js';
import NotificationSetup from './NotificationSetup';
const myStyles = require('./assets/styles.js'); //styles class found in different file

var PushNotification = require('react-native-push-notification');
let myToken = "";


//main driver class
export default class MountieMobileApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {/*deviceToken: ""*/};
		this.notif = new NotificationSetup(this.onRegister, this.onNotification); //configures notifications
		this.deviceVersionNumber = '1.4.0';
	}
	componentDidMount(){
		var firebase = require('firebase');
		var config = {
			apiKey: '******',
			authDomain: '******',
			databaseURL: '******',
			projectId: '******',
			storageBucket: '******',
			messagingSenderId: '******',
			appId: '******',
		};
		if (!firebase.apps.length) {
		  //checks to make sure there's only one instance of app
		  firebase.initializeApp(config);
		}
		var db = firebase.database();
		var ref = db.ref('/appUsers');

		db.ref('/appInfo').once('value', (snapshot) => {
			console.log('This is stuff');
			console.log(snapshot.val());
			this.setState({correctVersion: snapshot.val().versionNumber});
		});

	}
	onNotification = (notification) =>{
		console.log('NOTIFICATION:', notification);
	}

	onRegister = (token) => {
		console.log('TOKEN:', token);

		this.setState({deviceToken: token.token});
	}

  render() {
	  if(this.state.deviceToken && this.state.correctVersion)
	  {
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
		  //checks to make sure there's only one instance of app
		  firebase.initializeApp(config);
		}
		var db = firebase.database();
		var ref = db.ref('/appUsers');
			if(this.state.correctVersion === this.deviceVersionNumber)
			{
				let token = {token: this.state.deviceToken};
				ref.child(token.token).update({
					info: token,
				});
				db.ref('/appUsers/' + token.token).once('value', (snapshot) => {
					if(!snapshot.hasChild('notificationsPreferences'))
					{
						let athleticsNotif = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];
						let academicsNotif = [false, false, false, false];
						let artsNotif = [false, false, false,false, false];
						let miscellaneousNotif = [false, false, false];
						db.ref('/appUsers/' + token.token).child('notificationsPreferences').set({athleticsNotif, academicsNotif, artsNotif, miscellaneousNotif});
					}
				});
			}
	  }

	  if(!this.state.deviceToken || !this.state.correctVersion)//| !this.state.correctVersion)
	  {
		    return (
			<View style={styles.retrieveDataContainer}>
				<Text>PREPARING...</Text>
			</View>
      
		  );
	    }
	  else {
		  if(this.state.correctVersion === this.deviceVersionNumber)
		  {
			return (
				<View style={styles.container}>
					<FullAppContainer screenProps = {{thisToken: this.state.deviceToken}}/>
				</View>
			);
		  }
		  else{
			  Alert.alert('Update Required', 'You must update your app to use mountie mobile. The app and its notifications will temporarily be disabled until you update');
			  return(
				<View style={styles.retrieveDataContainer}>
					<Text>You must update</Text>
				</View> );
		  }


		}

  }
}

//bottom navigation tab configuration
const TabNavigator = createBottomTabNavigator(
  {
    Academia: AcademiaScreen,
    Arts: ArtsScreen,
    Home: HomeScreen,
    Athletics: AthleticsScreen,
    Misc: MiscellaneousScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Academia') {
           const image = focused
        ? require('./assets/icons/BottomTabNavigator/books-stack-of-three-selected.png')
        : require('./assets/icons/BottomTabNavigator/books-stack-of-three.png')
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25 }}
            />
          );
        }
        else if (routeName === 'Arts') {
          const image = focused
        ? require('./assets/icons/BottomTabNavigator/music-note-selected.png')
        : require('./assets/icons/BottomTabNavigator/music-note.png')
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25 }}
            />
          );
        }
        else if (routeName === 'Home') {
         const image = focused
        ? require('./assets/icons/BottomTabNavigator/home-icon-selected.png')
        : require('./assets/icons/BottomTabNavigator/home-icon.png')
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25 }}
            />
          );
        }
        else if (routeName === 'Athletics') {
         const image = focused
        ? require('./assets/icons/BottomTabNavigator/rugby-ball-selected.png')
        : require('./assets/icons/BottomTabNavigator/rugby-ball.png')
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25 }}
            />
          );
        }
        else if (routeName === 'Misc') {
         const image = focused
        ? require('./assets/icons/BottomTabNavigator/more-selected.png')
        : require('./assets/icons/BottomTabNavigator/more.png')
          return (
            <Image
              source={image}
              style={{ height: 25, width: 25 }}
            />
          );
        }
        // You can return any component that you like here!
        return (
          <Image
            source={require('./assets/icons/BottomTabNavigator/books-stack-of-three.png')}
            style={{ height: 25, width: 25 }}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#142EEF', //'#0e3eee' is the former blue color used
      inactiveTintColor: 'black',
      activeBackgroundColor: 'transparent', //#ccddff is the blue tint on bottom tab navigator
      inactiveBackgroundColor: 'transparent',
    },
    navigationOptions: { header: null,
      drawerLabel: 'Events',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/icons/mountie-head.png')}
        style={[styles.icon, { tintColor: tintColor,width:30,height:30 }]}
      />
    ),
  },

    initialRouteName: 'Home',
    adaptive: 'true',

  }
);

const AppNavigator = createDrawerNavigator(
  {
    Events: TabNavigator,
    SearchBar: SearchBar,
    Calendar: Calendar,
    Settings: SettingScreen,
    MoreLinks: MoreLinks,
  },
  {
    initialRouteName: 'Events',
    drawerPosition: 'right',
    contentOptions: {
        activeTintColor: '#142EEF',
        inactiveTintColor: 'black',
}
  }
);



//Loading screen implemented here with the tabNavigator
const FULLNavigator = createSwitchNavigator({
  Loading: LoadingScreen,
  App: AppNavigator,
});

const FullAppContainer = createAppContainer(FULLNavigator); //must be done in version 3 of React Navigation

const styles = StyleSheet.create({
	  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(true),
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  retrieveDataContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(true),
    backgroundColor: '#ecf0f1',
    padding: 0,
    alignItems: 'center'
  }
});
