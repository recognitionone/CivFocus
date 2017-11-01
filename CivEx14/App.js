
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import FocusRoomScreen from './components/FocusRoom'
import CityViewScreen from './components/CityView'
import StatsScreen from './components/Stats'

const MyApp = StackNavigator({
  FocusRoom: {  
                screen: FocusRoomScreen,
                navigationOptions:{ 
                  headerTitle: 'Focus Room'
                }
  },
  CityView: { screen: CityViewScreen,
    navigationOptions:{ 
      headerTitle: 'City View'
    } },
  Stats: { screen: StatsScreen,navigationOptions:{ 
    headerTitle: 'Stats'
  } },
  
}, {
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight,
      alignContent: 'center',
    }
  }
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}