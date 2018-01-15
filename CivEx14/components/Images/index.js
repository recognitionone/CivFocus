import React, { Component } from 'react';
import {View, Button, Text, TextInput, Slider, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    let myText = "lorem ipsum";
    return (
      <View>
        <Text>{myText}</Text>
        <TextInput 
          placeholder="What needs to be done"
          blurOnSubmit={false}
          returnKeyType="done"
        />
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    let display = 'dolor sum';
    return (
      <View>
        <Text>{display}!</Text>
      </View>  
    );
  }
}

export default class ImagesScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Hi</Text>
      </View>
      <Footer />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0"
  },
  
  content: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 30
  }, 
  input:{
    flex: 1,
    height: 80,
    backgroundColor: "#FFD800"
  }

  

})