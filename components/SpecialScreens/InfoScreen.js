import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, 
ScrollView, Image, Animated, Dimensions, } from 'react-native';
import HomeScreen from '../MainScreens/HomeScreen.js';
import Header from '../Header.js';
const athleticIcons = {
  football: require('../../assets/icons/Athletics/football-icon.png'),
  golf: require('../../assets/icons/Athletics/golf-icon.png'),
  trackandfield: require('../../assets/icons/Athletics/track and field-icon.png'),
  baseball: require('../../assets/icons/Athletics/baseball-icon.png'),
  basketball: require('../../assets/icons/Athletics/basketball-icon.png'),
  bowling: require('../../assets/icons/Athletics/bowling-icon.png'),
  crossCountry: require('../../assets/icons/Athletics/crossCountry-icon.png'),
  cheer: require('../../assets/icons/Athletics/cheer-icon.png'),
  soccer: require('../../assets/icons/Athletics/soccer-icon.png'),
  wrestling: require('../../assets/icons/Athletics/wrestling-icon.png'),
  volleyball: require('../../assets/icons/Athletics/volleyball-icon.png'),
  tennis: require('../../assets/icons/Athletics/tennis-icon.png'),
    swimanddive: require('../../assets/icons/Athletics/swimming-icon.png'),
  softball: require('../../assets/icons/Athletics/softball-icon.png')
};
const artIcons = {
  band: require('../../assets/icons/Arts/band-icon.png'),
  orchestra: require('../../assets/icons/Arts/orchestra-icon.png'),
  theatreDance: require('../../assets/icons/Arts/theatreDance-icon.png'),
  drama: require('../../assets/icons/Arts/drama-icon.png'),
  choir: require('../../assets/icons/Arts/choir-icon.png'),
};
const academicIcons = {
  act: require('../../assets/icons/Academics/actSat-icon.png'),
  sat: require('../../assets/icons/Academics/actSat-icon.png'),
  assembly: require('../../assets/icons/Academics/assembly-icon.png'),
  tutoring: require('../../assets/icons/Academics/tutoring-icon.png'),
};
const miscIcons = {
  clubMeeting: require('../../assets/icons/Miscellaneous/clubMeeting-icon.png'),
  pepRally: require('../../assets/icons/Miscellaneous/pepRally-icon.png'),
  schoolDance: require('../../assets/icons/Miscellaneous/schoolDance-icon.png'),
};



export default class InfoScreen extends React.Component {
  static navigationOptions = { header: null };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 250,
          duration: 500,
        }),
        Animated.timing(this.animatedValue, { //repeated to make the blue hue last longer than the black
          toValue: 250,
          duration: 500,
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 500,
        }),
      ])
    ).start();
  }

  specialOrNah( eventName, isSpecial ){
    const interpolateColor = this.animatedValue.interpolate({
    inputRange: [0, 250],
    outputRange: ['black', 'blue']
    })
    if ( isSpecial == true)
    {
      return (
        <View>
          <Animated.Text 
          style={[{borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}, 
                {color: interpolateColor }]}>
            { eventName }
            {"\n\n"}
            <Text style={{ fontSize: 15 }}>(This event is marked as important)</Text>
          </Animated.Text>
        </View>
      );
    }
    else return (
      <View>
        <Text style={{borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
          { eventName }
        </Text>
      </View>
    );
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
          case 'cheer':
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
		  case 'softball':
			catObject = athleticIcons.softball;
			break;
		  case 'swim/dive':
			catObject = athleticIcons.swimanddive;
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
          width: (Dimensions.get('window').width * .7),
          height: (Dimensions.get('window').width * .7),
          alignSelf: 'center',
        }}
      />
    );
  }
  

  render() {
    let { navigation } = this.props;
    
    let event = navigation.getParam('event', "ERROR: NO EVENT FOUND");
    let rawTime = new Date();
    if (event.date !== null)
    {
      rawTime = new Date( event.date.toString() );
    }
    var x = new timeCheck();
    var realTime = x.finalMethod(
      rawTime.getUTCMonth() + 1,
      rawTime.getUTCDate(),
      rawTime.getUTCFullYear(),
      rawTime.getUTCMinutes(),
      rawTime.getUTCHours() 
    );


    return(
      <View style={styles.container}>
        <Header backButton = { true }/>  

        { this.specialOrNah( event.name, event.isSpecial ) }  

        <ScrollView> 
          <Text style={ styles.normalText }>
            {"\n"}
            Category:     { event.category }
            {"\n\n"}
            Activity:    { event.activity }
            {"\n\n"}
            Description:   { event.description }
            {"\n\n"}
            Location:   { event.location }
            {"\n\n"}
            Time:    { realTime }
            {"\n"}
          </Text>

          <View style={{ padding: 20 }}>
            { this.renderImage( event.category, event.activity ) }
          </View>
        </ScrollView>

      </View>
    );  
  }
}

//export default withNavigation( InfoScreen );



//formats the time to be appropriate for reading
class timeCheck extends React.Component {
  finalMethod(passedMonth, passedDate, passedYear, passedMinutes, passedHours) {
    var finalString = '';
    finalString += passedMonth + '/' + passedDate + '/' + passedYear; //puts in the "month/day/year"

    if (passedHours == 0 && passedMinutes == 0) {
      finalString += '    ALL DAY';
    } else {
      finalString += '    @ ';
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

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  normalText: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  /*
  headerText: {
    borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold',color:"red"
  },*/
});