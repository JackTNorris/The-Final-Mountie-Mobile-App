import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Animated
} from 'react-native';
import Constants from 'expo-constants';
import InfoScreen from './SpecialScreens/InfoScreen';
const myStyles = require('../assets/styles.js');
const athleticIcons = {
  football: require('../assets/icons/Athletics/football-icon.png'),
  golf: require('../assets/icons/Athletics/golf-icon.png'),
  trackandfield: require('../assets/icons/Athletics/track and field-icon.png'),
  baseball: require('../assets/icons/Athletics/baseball-icon.png'),
  basketball: require('../assets/icons/Athletics/basketball-icon.png'),
  bowling: require('../assets/icons/Athletics/bowling-icon.png'),
  crossCountry: require('../assets/icons/Athletics/crossCountry-icon.png'),
  cheer: require('../assets/icons/Athletics/cheer-icon.png'),
  soccer: require('../assets/icons/Athletics/soccer-icon.png'),
  wrestling: require('../assets/icons/Athletics/wrestling-icon.png'),
  volleyball: require('../assets/icons/Athletics/volleyball-icon.png'),
  tennis: require('../assets/icons/Athletics/tennis-icon.png'),
};
const artIcons = {
  band: require('../assets/icons/Arts/band-icon.png'),
  orchestra: require('../assets/icons/Arts/orchestra-icon.png'),
  theatreDance: require('../assets/icons/Arts/theatreDance-icon.png'),
  drama: require('../assets/icons/Arts/drama-icon.png'),
  choir: require('../assets/icons/Arts/choir-icon.png'),
};
const academicIcons = {
  act: require('../assets/icons/Academics/actSat-icon.png'),
  sat: require('../assets/icons/Academics/actSat-icon.png'),
  assembly: require('../assets/icons/Academics/assembly-icon.png'),
  tutoring: require('../assets/icons/Academics/tutoring-icon.png'),
};
const miscIcons = {
  clubMeeting: require('../assets/icons/Miscellaneous/clubMeeting-icon.png'),
  pepRally: require('../assets/icons/Miscellaneous/pepRally-icon.png'),
  schoolDance: require('../assets/icons/Miscellaneous/schoolDance-icon.png'),
};

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  withNavigation,
} from 'react-navigation';

class EventList extends React.Component {
  static navigationOptions = { header: null };

  state = {
    events: [
      {
        name: 'Loading...',
        date: 'Loading...',
        activity: 'Loading...',
        category: 'Loading...',
        description: 'Loading...',
        location: 'Loading...',
      },
    ], //had to initialize with something
  };

  componentWillMount() {
	  this.animatedValue = new Animated.Value(0);
    //ran right  before render
    var allStuff = [];
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
    if (this.props.eventCategory === 'all') {
      let allRef = db.ref('/events');
      var items = [];
      allRef
        .once('value', a => {
          a.forEach(b => {
            b.forEach(c => {
              items.push(c.val()); // remove this if uncommenting above
            });
          });
        })
        .then(() => {
          items.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });
          console.log(items);
          this.setState({ events: items });
          return '';
        })
        .catch(error => {
          console.log(error.message);
        });
    } else if (
      this.props.eventCategory === 'athletics' ||
      this.props.eventCategory === 'arts' ||
      this.props.eventCategory === 'miscellaneous' ||
      this.props.eventCategory === 'academics'
    ) {
      var ref = db.ref('/events/' + this.props.eventCategory);
      var these = [];
      ref
        .once('value', snapshot => {
          snapshot.forEach(item => {
            these.push(item.val());
          });
        })
        .then(() => {
          these.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          });
          this.setState({ events: these });
          return '';
        });
    }
  }

 componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 150,
          duration: 1500,
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 1500,
        }),
      ])
    ).start();
  }



  renderImage(category, activity) {
    let catObject = null;
    switch (category.toLowerCase()) {
      case 'athletics':
        switch (activity.toLowerCase()) {
          case 'football':
            catObject = athleticIcons.football;
            break;
          case 'baseball':
            catObject = athleticIcons.baseball;
            break;
          case 'basketball':
            catObject = athleticIcons.basketball;
            break;
          case 'bowling':
            catObject = athleticIcons.bowling;
            break;
          case 'golf':
            catObject = athleticIcons.golf;	
            break;
          case 'track and field':
            catObject = athleticIcons.trackandfield;
            break;
          case 'cross country':
            catObject = athleticIcons.crossCountry;
            break;
          case 'cheer/competitive dance':
            catObject = athleticIcons.cheer;
            break;
          case 'tennis':
            catObject = athleticIcons.tennis;
            break;
          case 'volleyball':
            catObject = athleticIcons.volleyball;
            break;
          case 'wrestling':
            catObject = athleticIcons.wrestling;
            break;
          case 'soccer':
            catObject = athleticIcons.soccer;
            break;
        }
        break;
      case 'academics':
        switch (activity.toLowerCase()) {
          case 'act':
            catObject = academicIcons.act;
            break;
          case 'sat':
            catObject = academicIcons.sat;
            break;
          case 'tutoring':
            catObject = academicIcons.tutoring;
            break;
          case 'assembly':
            catObject = academicIcons.assembly;
            break;
        }
        break;
      case 'miscellaneous':
        switch (activity.toLowerCase()) {
          case 'club meeting':
            catObject = miscIcons.clubMeeting;
            break;
          case 'pep rally':
            catObject = miscIcons.pepRally;
            break;
          case 'school dance':
            catObject = miscIcons.schoolDance;
            break;
        }
        break;
      case 'arts':
        switch (activity.toLowerCase()) {
          case 'band':
            catObject = artIcons.band;
            break;
          case 'orchestra':
            catObject = artIcons.orchestra;

            break;
          case 'choir':
            catObject = artIcons.choir;
            break;
          case 'theatre dance':
            catObject = artIcons.theatreDance;
            break;
          case 'drama':
            catObject = artIcons.drama;
            break;
        }
        break;
    }

    return (
      <Image
        source={catObject}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          alignSelf: 'center',
        }}
      />
    );
  }

  displayEvents() {
	 const interpolateColor = this.animatedValue.interpolate({
		  inputRange: [0, 150],
		  outputRange: ['rgb(0, 0, 0)', 'rgb(0, 89, 255)']
		})
    let returnData = [];
    let specEvents = []; //items array stored all of the events for that category
    if (this.state.events) {
      this.state.events.forEach(item => {
        if (this.props.specificDate) {
          let theDate = this.props.specificDate;
          console.log(this.props.specificDate);
          if (
            new Date(item.date.toString()).getUTCDate() === theDate.getDate() &&
            new Date(item.date.toString()).getUTCMonth() ===
              theDate.getMonth() &&
            new Date(item.date.toString()).getUTCFullYear() ===
              theDate.getFullYear()
          ) {
            specEvents.push(item);
          }
        } else {
          var todaysDate = new Date();
          var eventDate = new Date(item.date); //work on this part!!!
          if (
            Date.UTC(
              todaysDate.getFullYear(),
              todaysDate.getMonth(),
              todaysDate.getDate()
            ) <
            eventDate.getTime() + 86400000
          ) {
            //86400000 is a day in miliseconds
            specEvents.push(item);
          }
        }
      });
    }

    for (let x = 0; x < specEvents.length; x++) {
      var g = new Date(specEvents[x].date.toString());
      var checkTime = new timeCheck();
      var timePassing = checkTime.finalMethod(
        g.getUTCMonth() + 1,
        g.getUTCDate(),
        g.getUTCFullYear(),
        g.getUTCMinutes(),
        g.getUTCHours()
      );

      

      //the filtering step for searching
      if (
        this.props.filterSearch != null &&
        (specEvents[x].name
          .toLowerCase()
          .indexOf(this.props.filterSearch.toLowerCase()) > -1 ||
          specEvents[x].activity
            .toLowerCase()
            .indexOf(this.props.filterSearch.toLowerCase()) > -1 ||
          specEvents[x].description
            .toLowerCase()
            .indexOf(this.props.filterSearch.toLowerCase()) > -1)
      ) {
        if (specEvents[x].isSpecial) {
          returnData.push(
            <TouchableHighlight //second part of navigate method is the parameters passed to the next screen
              onPress={() =>
                this.props.navigation.navigate('Information', {
                  event: specEvents[x]
                })
              }>
              <View style={[myStyles.li]}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  <Animated.Text
                    style={[myStyles.liText, { color: interpolateColor }]}>
                    {specEvents[x].name}
                  </Animated.Text>
                  <Text>{timePassing}</Text>
                </View>
                {this.renderImage(
                  specEvents[x].category,
                  specEvents[x].activity
                )}
              </View>
            </TouchableHighlight>
          );
        } else {
          returnData.push(
            <TouchableHighlight //second part of navigate method is the parameters passed to the next screen
              onPress={() =>
                this.props.navigation.navigate('Information', {
                  event: specEvents[x],
                  time: timePassing,
                })
              }>
              <View style={myStyles.li}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  <Text style={myStyles.liText}>{specEvents[x].name}</Text>
                  <Text>{timePassing}</Text>
                </View>
                {this.renderImage(
                  specEvents[x].category,
                  specEvents[x].activity
                )}
              </View>
            </TouchableHighlight>
          );
        }
      }
      //if a search IS NOT being done this is ran
      if (this.props.filterSearch == null) {
        if (specEvents[x].isSpecial) {
          returnData.push(
            <TouchableHighlight //second part of navigate method is the parameters passed to the next screen
              onPress={() =>
                this.props.navigation.navigate('Information', {
                  event: specEvents[x],
                  time: timePassing,
                })
              }>
              <View style={[myStyles.li]}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  <Animated.Text
                    style={[myStyles.liText, { color: interpolateColor }]}>
                    {specEvents[x].name}
                  </Animated.Text>
                  <Animated.Text style = {{color: interpolateColor}}>{timePassing}</Animated.Text>
                </View>
                {this.renderImage(
                  specEvents[x].category,
                  specEvents[x].activity
                )}
              </View>
            </TouchableHighlight>
          );
        } else {
          returnData.push(
            <TouchableHighlight //second part of navigate method is the parameters passed to the next screen
              onPress={() =>
                this.props.navigation.navigate('Information', {
                  event: specEvents[x],
                  time: timePassing,
                })
              }>
              <View style={myStyles.li}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  <Text style={myStyles.liText}>{specEvents[x].name}</Text>
                  <Text>{timePassing}</Text>
                </View>
                {this.renderImage(
                  specEvents[x].category,
                  specEvents[x].activity
                )}
              </View>
            </TouchableHighlight>
          );
        }
      }
    }
    return returnData;
  }

  render() {
    return (
      <View style={{ alignContent: 'center' }}>{this.displayEvents()}</View>
    );
  }
}

export default withNavigation(EventList);

//formats the time to be appropriate for reading
class timeCheck extends React.Component {
  finalMethod(passedMonth, passedDate, passedYear, passedMinutes, passedHours) {
    var finalString = '';
    finalString += passedMonth + '/' + passedDate + '/' + passedYear; //puts in the "month/day/year"
    finalString += '    @ ';

    if (passedHours == 0 && passedMinutes == 0) {
      finalString += 'ALL DAY';
    } else {
      if (passedHours > 12) {
        //starts the "hour:min AM/PM" part
        finalString += passedHours - 12 + ':';
      } else if (passedHours == 0) {
        finalString += 12 + ':';
      } else finalString += passedHours + ':';

      if (passedMinutes < 10) {
        finalString += '0' + passedMinutes + ' ';
      } else finalString += passedMinutes + ' ';

      if (passedHours > 11 && passedHours < 24) {
        finalString += 'PM';
      } else finalString += 'AM';
    }

    return finalString;
  }
}

//gives the icon depending on the activity passed

