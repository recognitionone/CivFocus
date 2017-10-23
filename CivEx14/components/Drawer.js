import React , { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    drawer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    btn:{
        width:20,
        height:60,
        borderRadius:50,

    }
  });

export default class Drawer extends Component{
    _handleButtonPress = () => {
        Alert.alert(
          'Button pressed!',
          'You did it!',
        );
      };

    render(){
        return <View style={styles.drawer}>
                    <Button
                    title="Learn More"
                    color="#841584"
                    onPress={this._handleButtonPress}
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                    title="Learn More"
                    color="#841584"
                    onPress={this._handleButtonPress}
                    accessibilityLabel="Learn more about this purple button"
                    />
                    <Button
                    title="Learn More"
                    color="red"
                    onPress={this._handleButtonPress}
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
    }
}


