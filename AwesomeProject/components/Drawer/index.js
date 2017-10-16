import React , { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    drawer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:30
    },
    btn:{
        width:20,
        height:20,
        borderRadius:50,

    }
  });

export default class Drawer extends Component{
    render(){
        return <View style={styles.drawer}>
                    <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                    title="Learn More"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
    }
}


