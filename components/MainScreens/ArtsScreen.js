import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Image } from 'react-native';
import EventList from '../EventList.js';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation';
  
import InfoScreen from '../SpecialScreens/InfoScreen.js';
import Header from '../Header.js';


class ArtsScreen extends React.Component {
static navigationOptions = { header: null 
};

  render() {  
    return (  
      <View style={styles.container}>
        <Header  menuButton = {true} />
        
        <Text style = {{borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
          Art Events
        </Text>

        <ScrollView >
          <EventList eventCategory="arts" />
        </ScrollView>
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Default: ArtsScreen,
    Information: InfoScreen
  },
  { initialRouteName: 'Default'}
);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
  }
});


