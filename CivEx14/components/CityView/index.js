import React, { Component } from 'react';
import {View,Text,Button, StyleSheet} from 'react-native'
import PercentageCircle from 'react-native-percentage-circle';

export default class CityView extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text> Hello Again My World 1 </Text>
                </View>)
      }
    }