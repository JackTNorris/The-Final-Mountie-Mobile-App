import React, { Component } from 'react';
import {Text, View, Image, Button, Alert, StyleSheet, Animated, TouchableOpacity, Dimensions} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//loading logo
import mainLogo from '../assets/logos/REAL_LOGO.png';


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2500,               // Make it take a while
      }
    ).start();                        // Starts the animation
    }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      > 
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class loginScreen extends Component{
  
  static navigationOptions = { header: null, headerVisible: false}

  render(){
    return(
      <TouchableOpacity 
          onPress = {()=> this.props.navigation.navigate('Home')} 
          style={ styles.container }>
        <View style = {styles.container}>
            
            <FadeInView style={{width: 350, height: 100, backgroundColor: 'white'}}>
              <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source = { mainLogo } style = {{ height: Dimensions.get('window').width * 0.9 * 0.175, width: Dimensions.get('window').width * 0.9 }}/>
                <Text style={{ fontSize: 20, paddingTop: 10, textAlign: 'center' }}>
                  Created for students, by students.
                  {"\n\n"}
                  Tap to begin
                </Text>
              </View>
            </FadeInView>

        </View>
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});


