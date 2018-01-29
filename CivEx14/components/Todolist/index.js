import React, { Component } from 'react';
import {View, Text, StyleSheet, ListView, Keyboard  } from 'react-native';
import Header from '../Todolist/Header'
import Footer from '../Todolist/Footer'


export default class TodolistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allComplete: false,
      value: "",
      items: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
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
      value: ""
    })
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
    console.table({newItems});
  }

  render(){
    return(
      <View style={styles.container}>
        <Header 
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({ value }) }
          onToggleAllComplete={this.handleToggleAllComplete}
        />
        <View style={styles.content}>
          <Text>Here will be the content or jeez</Text>
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