import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ListView, Keyboard  } from 'react-native';
import Header from '../Todolist/Header'
import Footer from '../Todolist/Footer'


export default class TodolistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: "poooooo",
      items: [],
      count: 0,
      pizza: ''
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  // onPress = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })

  onPress() {
    this.setState({
      count: this.state.count+1
    })
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
    this.setState= ({
      items: newItems,
      value: "dupę"
    })
    console.table(newItems);
  }

  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }))
    
    this.setState({
      items: newItems,
      allComplete: complete
    })
    console.table(this.state.value);
  }

  render(){
    return(
      <View style={styles.container}>
        <Header 
          // value={this.state.value}
          // onAddItem={this.handleAddItem}
          // onChange={(value) => this.setState({ value }) }
          // onToggleAllComplete={this.handleToggleAllComplete}
        />
        <View style={styles.content}>
          <TouchableOpacity
            // onPress={this.onPress}
            onPress={this.handleAddItem}
          >
            <Text> Submit </Text>
          </TouchableOpacity>
          <Text>
            { this.state.count !== 0 ? this.state.count: "hello"}
          </Text>
          <Text>Here will be the content or jeez</Text>

          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(pizza) => this.setState({pizza})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.pizza.split(' ').map((word) => word && '0_0').join(' ')}
            </Text>
          </View>
        </View>
        <Footer />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'

  }, 
  content: {
    flex: 1,
    backgroundColor: '#89b9ba'
  }
})