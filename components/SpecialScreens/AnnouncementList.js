import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

const myStyles = require('../../assets/styles.js');


export default class Announcements extends React.Component {
  state = {
    announcements: [
      {
        message: 'Loading...',
      },
    ], //had to initialize with something
  };

  componentWillMount() {
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
      firebase.initializeApp(config);
    }

    var db = firebase.database();
    var ref = db.ref('/announcements');
    ref.once('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ announcements: items });
    });
  }

  displayAnnouncements() {
    let returnData = [];
    let specAnnounce = [];

    if (this.state.announcements) {
      this.state.announcements.forEach(item => {
        specAnnounce.push(item);
      });
      specAnnounce.sort((a,b) => {
        return new Date(b.dateEntered) - new Date(a.dateEntered);
      })
    }

    for (var x = 1; x <= specAnnounce.length; x++) {
      if (x % 2 === 0) {
        returnData.push(
          <View style={myStyles.announcementListEven}>
            <Text style={myStyles.liText2}>
              {specAnnounce[x - 1].message.toString()}
            </Text>
          </View> 
        );
      }

      if (x % 2 === 1) {
        returnData.push(
          <View style={myStyles.announcementListOdd}>
            <Text style={myStyles.liText3}>
              {specAnnounce[x - 1].message.toString()}
            </Text>
          </View>
        );
      }
    }
    return returnData;
  }

  render() {
    return (
      <View style={{ alignContent: 'center' }}>
        {this.displayAnnouncements()}
      </View>
    );
  }
}





