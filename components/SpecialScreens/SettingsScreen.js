import * as React from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  Button, Image, TouchableOpacity, } from 'react-native';
import Header from '../Header.js';
import { createStackNavigator } from 'react-navigation';
import Notifications from './Notifications.js';
import UsesAndCredits from './UsesAndCredits.js';
import TermsAndConditions from './TermsAndConditions.js';


class SettingsScreen extends React.Component {
  static navigationOptions = { header: null };


  render() {
    return (
      <View style={styles.container}>
        <Header menuButton={ true } />

        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.mainBody}>
            {'\n'}
            Created By: {'\n'}
            
            {'\t'}Jack Norris - Project Lead{'\n'}
            {'\n'}
          
            {'\t'}Brad Campbell - Chief Designer{'\n'}
            {'\n'}
            
            {'\t'}Ethan Potts {'\n\n\t'}Trevor Scogin {'\n\n\t'}Garrett Chrisman
            {'\n\n\n\n'}
            Version 1 . 0 . 1{'\n'}
          </Text>
			</View>
      <View>
        <TouchableOpacity
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('Notifications') }>
            <Text style={ styles.buttonText }>Click for Notifications</Text>
            <Image source={ require('../../assets/icons/right-arrow.png') } style={ styles.rightArrow }/>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('UsesAndCredits') }>
            <Text style={ styles.buttonText }>Click for Credits</Text>
            <Image source={ require('../../assets/icons/right-arrow.png') } style={ styles.rightArrow }/>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('TermsAndConditions') }>
            <Text style={ styles.buttonText }>Click for Terms and Conditions</Text>
            <Image source={ require('../../assets/icons/right-arrow.png') } style={ styles.rightArrow }/>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

export default createStackNavigator(
  {
    Original: SettingsScreen,
    Notifications: Notifications,
    UsesAndCredits: UsesAndCredits,
    TermsAndConditions: TermsAndConditions,
  },
  {
    initialRouteName: 'Original',
    navigationOptions: () => ({
      header: null,
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/icons/settings-icon.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      ),
    }),
  }
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
  
  mainBody: {
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
	borderBottomWidth: 1
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  buttonText: {
	  textAlign: 'left',
	  paddingRight: 10,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
  rightArrow: {
	  width: 30, 
    height: 30, 
    marginLeft: 'auto',
  },
});

