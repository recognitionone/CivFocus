import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const styles = StyleSheet.create({
    header: {
      
      justifyContent:'space-between',
      flexDirection:'row'
    },
    btn:{
        flex:1,
        height:10
    }
  });

export default class Header extends React.Component{
    _handleButtonPress = () => {
        Alert.alert(
          'Button pressed!',
          'You did it!',
        );
      };

    render(){
        return (<View style={styles.header}>
                    <Button style={styles.btn}
                     title="Press me"
                    onPress={this._handleButtonPress}
        
                    color="green"
                    />
                    <Button style={styles.btn}
                    title="maal"
                    onPress={this._handleButtonPress}
                    color="green"
                    />
                    <Button style={styles.btn}
                    title="vaal"
                    onPress={this._handleButtonPress}
                    color="green"
                    />
                </View>)
    }
} 