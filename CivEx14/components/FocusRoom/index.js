import React, { Component } from 'react';
import {View,Text,Button,TouchableOpacity, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import {IconDropDown} from '../Common/IconButton'
import Timer from '../Common/Timer'

    
export default class FocusRoom extends Component{
    static navigationOptions = {
        title: 'Welcome',
      };

    render(){
        const { navigate } = this.props.navigation;
        return( <View style={styles.wrapper}>
                  <IconDropDown navigate={navigate} />
                  <View style={styles.content}>
                      <Text style={styles.textStyle}>Focus</Text>
                      <Timer/>
                  </View>
                </View>)
      }
    }

    const styles=StyleSheet.create({
        wrapper:{
            margin:10,
        },
        content:{
            marginTop:15,
            justifyContent:'center',
            alignItems:'center'
        },
        textStyle:{
            fontWeight:'bold',
            fontSize:22
        }
    })
