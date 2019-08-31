import * as React from 'react';
import {
  Text, View, StyleSheet,
  TouchableOpacity, ScrollView, Image,
  Linking, Alert,
} from 'react-native';
import Header from '../Header.js';
const myStyles = require('../../assets/styles.js');


export default class ImportantLinks extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Important Links',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/links-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };


  render() {
    return (
      <View style={styles.container}>
        <Header menuButton = { true } />

        <ScrollView>
          <Text
            style={{
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Important Links
          </Text>

          <View style={{ backgroundColor: 'white' }}>
            <Text style={{ fontSize: 5 }}>{'\n'}</Text>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() =>
                Linking.openURL('https://hac40.esp.k12.ar.us/HomeAccess40/Account/LogOn?ReturnUrl=%2FHomeAccess40')
              }>
              <Text style={ styles.buttonText }>HAC (Grade Viewer)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('http://www.rogersschools.net/departments/nutrition/meal_payments')}>
              <Text style={ styles.buttonText }>Lunch Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Alert.alert('Name: Guest \nPassword: honor500')}>
              <Text style={ styles.buttonText }>WIFI?</Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() =>
                Linking.openURL(
                  'https://services.actstudent.org/OA_HTML/actibeCAcdLogin.jsp?adobe_mc=MCMID%3D66361572727043484161736345301679805695%7CMCORGID%3D06E7EB4D5537B6B80A4C98A5%2540AdobeOrg%7CTS%3D1529410410107&adobe_mc=MCMID%3D44125716684096123552887437581557511699%7CMCORGID%3D06E7EB4D5537B6B80A4C98A5%2540AdobeOrg%7CTS%3D1560979114449&_ga=2.197106220.1456022039.1560979104-1239669818.1540661744')}>
              <Text style={ styles.buttonText }>ACT Scores</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('https://www.collegeboard.org/')}>
              <Text style={ styles.buttonText }>AP and SAT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('https://classroom.google.com/')}>
              <Text style={ styles.buttonText }>Google Classroom</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('http://rhs.rogersschools.net/')}>
              <Text style={ styles.buttonText }>RHS Website</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              title="Scholarships Page"
              onPress={() => Linking.openURL('http://www.rhs.rogersschools.net/services/scholarships')}>
              <Text style={ styles.buttonText }>Scholarships Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('http://www.rhs.rogersschools.net/news/what_s_new/alternate_methods_of_instruction_plans__a_m_i_')}>
              <Text style={ styles.buttonText }>AMI (For snow days)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style = { styles.buttons }
              onPress={() => Linking.openURL('http://rhs.rogersschools.net/services/counseling')}>
              <Text style={ styles.buttonText }>Who is your counselor?</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 5 }}>{'\n'}</Text>
          </View>

          <Text style = {{borderBottomWidth: 1, padding: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            RHS Social Media
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50, paddingTop: 10, }}>
            <TouchableOpacity
              style={styles.sideButtons}
              onPress={() =>
                Linking.openURL('https://www.instagram.com/rhsmounties/')}>
              <Image source={require('../../assets/icons/SocialMedia/instagram.png')} style={{ height: 60, width: 60, }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sideButtons}
              onPress={() =>
                Linking.openURL('https://twitter.com/rhs_mounties?lang=en')
              }>
              <Image source={require('../../assets/icons/SocialMedia/twitter.png')} style={{ height: 60, width: 60, }} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sideButtons}
              onPress={() =>
                Linking.openURL('https://www.facebook.com/rhsmounties/')
              }>
              <Image source={require('../../assets/icons/SocialMedia/facebook.png')} style={{ height: 60, width: 60, }} />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
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
  icon: {
    width: 24,
    height: 24,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonText: {
    color: '#142EEF',
    fontSize: 20,
  }
});