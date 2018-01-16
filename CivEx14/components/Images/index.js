import React, { Component } from 'react';
import {View, Button, Text, TextInput, Slider, StyleSheet} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      value: "",
      items: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem() {
    if(!this.state.value) return;
    const newItems = [
    ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value, 
        complete: false
      }
    ]
    this.setState ({
      items: newItems,
      value: ""
    })
  }

  render() {
    let myText = "Hi hi: ";
    return (
      <View style={styles.header}>
        <Text>{myText}</Text>
        <TextInput 
          placeholder="What needs to be done !!!!"
          blurOnSubmit={false}
          returnKeyType="done"

          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#FFD800', marginLeft: 1, paddingLeft: 8, minWidth: 150, justifyContent: "flex-start"}}
          // onChangeText={(text) => this.setState({text})}

          value={this.state.text}
          onChange={ (value) => this.setState({ value })}

          onAddItem={this.handleAddItem}

          />
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    let display = 'dolor sum amet';
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
    flex: 3,
    backgroundColor: "#F0F0F0"
  },
  header: {
    // flex: 1,
    paddingHorizontal: 2,
    flexDirection: "row",
    justifyContent: "flex-start", 
    alignItems: "center"
  },
  
  content: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 30
  }, 
  input:{
    flex: 1,
    backgroundColor: "#FFD800"
  }

  

})