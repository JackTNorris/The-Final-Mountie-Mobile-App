import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ScrollView, Button, Linking, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator, } from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import DrawerLayout from 'react-native';  
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventList from '../EventList.js';
import Header from '../Header.js';
import SearchInfo from './SearchInfo.js';


class MySearchBar extends React.Component {
  static navigationOptions = { header: null, 
      drawerLabel: 'Search',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icons/search-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  
  //default code for a search bar
  state = {
    search: '',
  };

  //method ran upon each subsequent search
  updateSearch = search => {
    this.setState( {search} );
  };  
      


  //each of these methods passes the filterWord for use in searching

  render(){
    const { search } = this.state;

    return(
      <View style={ styles.container }>
        <Header menuButton = {true}/>

        <SearchBar
        placeholder = "Search Mountie Events..."
        onChangeText = { this.updateSearch }
        value = { search }
        lightTheme = 'true'
        containerStyle= { styles.searchBar }
        inputContainerStyle = {{ backgroundColor: 'white' }}
        round = 'true'
        showLoading= {null}
        clearIcon= {null}
        searchIcon= {null}
        />

        <ScrollView>
          <EventList eventCategory = 'all' filterSearch = { this.state.search }/>
        </ScrollView>
      </View>
    )
  }
}

export default createStackNavigator(
  {
    Regular: MySearchBar,
    Information: SearchInfo,
  },
  { initialRouteName: 'Regular', navigationOptions: () => ({ header: null, 
      drawerLabel: 'Search',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/icons/search-icon.png')}
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
  searchBar: {
    backgroundColor: '#ecf0f1'
  },
  icon: {
    width: 24,
    height: 24,
  },
});


