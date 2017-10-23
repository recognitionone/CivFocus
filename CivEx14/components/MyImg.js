import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class MyImg extends Component {
  render() {
    
    return (
      <Image source={require('../img/blue.png')} style={{width: 250, height: 250}}/>
    );
  }
}