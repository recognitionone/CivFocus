
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import MyImg from './components/MyImg';
import MyCity from './components/MyCity';
import MyStats from './components/MyStats';


class FocusRoomScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Focus Room',
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
        <View style={{flex: 1}}>

          <View style={{flex: 0.5, backgroundColor: 'powderblue', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',}}>
            <Text>
              Some text
            </Text>
          </View>

          <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'column',  justifyContent: 'center',
          alignItems: 'center',}} >
            <Text style={styles.welcome}>
              The room is dark
            </Text>
          </View>

          <View style={{flex: 6, backgroundColor: 'skyblue', flexDirection: 'column',  justifyContent: 'center',
          alignItems: 'center',}} >
            <MyImg />
          </View>

          <View style={{flex: 2, backgroundColor: 'steelblue', flexDirection: 'column',  justifyContent: 'center',
          alignItems: 'center',}} >
          <Button title="Start" onPress={() => console.log("start tapped!")}>Start</Button>
          </View>

          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
              <Icon name="ios-arrow-up" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="CityView" onPress={() => navigate('CityView', {name: 'CityView'})}>
              <Icon name="ios-arrow-up" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Stats" onPress={() => navigate('Stats', {name: 'Stats'})}>
              <Icon name="ios-arrow-up" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>

      </View>
      );
  }
}

class CityViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to CityView',
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={{flex: 8}}>
          <MyCity />
        </View>

        <View style={{flex: 1}}>
          <Button title="Back" onPress={() => navigate('FocusRoom', {name: 'FocusRoom'})} style={styles.backButton}>Back</Button>
        </View>
      </View>);
  }
}

class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Stats',
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <View style={{flex: 8}}>
          <MyStats />
        </View>
        <View style={{flex: 1}}>
          <Button title="Back" onPress={() => navigate('FocusRoom', {name: 'FocusRoom'})} style={styles.backButton}>Back</Button>
        </View>
      </View>);
  }
}

const MyApp = StackNavigator({
  FocusRoom: { screen: FocusRoomScreen },
  CityView: { screen: CityViewScreen },
  Stats: { screen: StatsScreen },
  
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
    backButton: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
