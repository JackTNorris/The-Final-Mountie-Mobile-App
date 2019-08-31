import * as React from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  Button, Image, TouchableOpacity,
} from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';
import Header from '../Header.js';
import EventList from '../EventList.js';
import SearchInfo from './SearchInfo.js';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: new Date(),
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  

  static navigationOptions = {
    header: null,
    drawerLabel: 'Calendar View',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/calendar-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  renderEventList() {
    const { selectedStartDate } = this.state
    if( selectedStartDate )
    { 
      let myDate = new Date(new Date(selectedStartDate.toString()).toDateString());
      if(myDate)
      {
        return <EventList eventCategory="all" specificDate={myDate}></EventList>;
      }    
    }
    else
    {
      return null;
    }

  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <Header menuButton = { true }/>
        <ScrollView>
          <View style={styles.container}>
            <CalendarPicker
              selectedDayTextColor = "#ffffff"
              selectedDayColor="#142EEF"
              onDateChange={this.onDateChange}
              todayTextStyle = {{color: "000000"}}
             
            />
          </View>

          <Text style={styles.title}>{ !(startDate === '') ? new Date(startDate).toDateString() : "No Date Selected"}</Text>
          <EventList eventCategory= "all" specificDate = { new Date(startDate) }/>
        </ScrollView>

      </View>
    );
  }
}

export default createStackNavigator(
  {
    Regular: Calendar,
    Information: SearchInfo,
  },
  { initialRouteName: 'Regular', navigationOptions: () => ({ header: null, 
      drawerLabel: 'Calendar',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/icons/calendar-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    })
  },
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    backgroundColor: '#ecf0f1', //#ecf0f1 is gray color throughout
    padding: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  }
});


