import React, { Component } from 'react';
import {View,Button,styles, Text} from 'react-native'

export default class StatsScreen extends Component {
  render(){
    const { navigate } = this.props.navigation;
    return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text> Hello World 2 </Text>
            </View>)
  }
  }

