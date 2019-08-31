import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  Alert,
} from 'react-native';
import EventList from '../EventList.js';
import Constants from 'expo-constants';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SettingScreen from '../SpecialScreens/SettingsScreen.js';
import Calendar from '../SpecialScreens/Calendar.js';
import SearchBar from '../SpecialScreens/SearchBar.js';
import MoreLinks from '../SpecialScreens/MoreLinks.js';
import Announcements from '../SpecialScreens/AnnouncementList.js';
import SearchInfo from '../SpecialScreens/SearchInfo.js';

import Header from '../Header.js';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };



  render() {
    let IconComponent = Ionicons;
    return (
      <View style={styles.container}>
        <Header menuButton={true} />

        <View>
          <ScrollView>
            <Text style={styles.title}>Announcements</Text>
            <View style={{ paddingTop: 20 }}>
              <Announcements />
            </View>
            <View>
              <Text style={styles.title}>Today's Events</Text>
              <View style={{ paddingTop: 20, paddingBottom: 100 }}>
                <EventList eventCategory="all" specificDate={new Date()} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default createStackNavigator({
  Regular: HomeScreen,
  Information: SearchInfo,
});

/*
export default createDrawerNavigator(
  {
    Home: HomeNavigator,
    SearchBar: SearchBar,
    Calendar: Calendar,
    Settings: SettingScreen,
    MoreLinks: MoreLinks,
  },
  { initialRouteName: 'Home' }
);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  title: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
