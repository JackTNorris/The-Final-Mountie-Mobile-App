import * as React from 'react';
import {
  Text, View, StyleSheet,
  ScrollView, Button, Image, TouchableOpacity,
} from 'react-native';
import Header from '../Header.js';
import { withNavigation, } from 'react-navigation';
const myStyles = require('../../assets/styles.js');



class TermsAndConditions extends React.Component{
  static navigationOptions = { header: null };
  
  
  render() {
    return(
      <View style={styles.container}>
        <Header backButton = { true }/> 
        
        <ScrollView>
          <Text style = {{borderBottomWidth: 1, paddingBottom: 10, fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            Terms and Conditions
          </Text>
          
          <View style={{ backgroundColor: 'white', }}>
            <Text style={ styles.liText }>
              All Mounties, past, present, and future, can use this app to improve the way we show spirit.
              {"\n\n"}
              Whether or not your spirit involves the incredible arts, athletics, or academics offered at Rogers High School, our app has something to offer to you.
              {"\n\n"}
              Thank you all.
              {"\n\n"}
              Written and established August of 2019.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation( TermsAndConditions );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1', //#ecf0f1 is gray color throughout
    paddingBottom: 20,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 10,
  },
});
