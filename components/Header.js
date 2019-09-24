import * as React from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  Image, Linking, TouchableOpacity, Alert, Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';


class Header extends React.Component {

  addMenuButton() {
    if ( this.props.menuButton == true ) {
      return (
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          marginRight: 10,
          right: 0,
        }}
        onPress={this.props.navigation.openDrawer}>
        <Image
          source={require('../assets/icons/menu-icon.png')}
          style={{
            width: Dimensions.get('window').width * 0.0917,
            height: Dimensions.get('window').height * 0.04769,
			marginTop: 5
          }}
        />
      </TouchableOpacity>
      );
    }
  }

  addBackButton() {
    if ( this.props.backButton == true ) {
      return (
        <TouchableOpacity 
          style={{
            alignSelf: 'flex-start',
            position: 'absolute',
            marginRight: 6,
            left: 0,
          }}
          onPress={() => this.props.navigation.goBack() }>
          <Image
            source={require('../assets/icons/backButton-icon.png')}
            style={{
				width: Dimensions.get('window').width * 0.1666667,
				height: Dimensions.get('window').height * 0.086705,
				marginTop: 5
            }}
          />
        </TouchableOpacity>
      );
    }
  }

  
  render() {
	  console.log("Height: " + Dimensions.get('window').height + " Width: " + Dimensions.get('window').width + "\n");
    return (
      <View
        style={{
          flexDirection: 'column', 
          height: Dimensions.get('window').height * 0.07,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        { this.addMenuButton() }
        { this.addBackButton() }
        <Image resizeMode = 'center' style={ styles.logoMove } source={ require('../assets/logos/REAL_LOGO.png') } />
      </View>
    );
  }
}

export default withNavigation( Header );


const styles = StyleSheet.create({
 
  logoMove: {
    width: (Dimensions.get('window').width * 0.8 ),
    height:(Dimensions.get('window').height * 0.8 * 0.183333),
    //marginLeft:  (Dimensions.get('window').width *0.1 ),
    //resizeMode: 'center',
	marginTop: 5

  },
});

