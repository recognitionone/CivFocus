import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
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
      pizza: '',
      searchText: '122323223'
    }
    // this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(stuff) {
    // console.table({stuff});
    if(!{stuff}) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: {stuff},
        complete: false
      }
    ]
    this.setState({
      items: newItems,
      searchText: ''
      
    })
    console.table({newItems});
    console.table(newItems);
    console.log(newItems);
  }

  // handleAddItem() {
  //   if(!this.state.value) return;
  //   const newItems = [
  //     ...this.state.items,
  //     {
  //       key: Date.now(),
  //       text: this.state.value,
  //       complete: false
  //     }
  //   ]
  //   this.setState= ({
  //     items: newItems,
  //     value: "dupę"
  //   })
  //   console.table(newItems);
  // }

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

          <View style={{
            flexDirection:'row', 
            width: window.width, 
            margin: 10, padding:4, 
            alignItems:'center', 
            justifyContent:'center', 
            borderWidth:4, 
            borderColor:'#888', 
            borderRadius:10, 
            backgroundColor:'#fff'}}
            >
            <View style={{flex:4}}>
              <TextInput
                  // onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
                  style={{backgroundColor:'transparent'}}
                  // onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
                  onFocus = {() => {console.log('onFocus')}}
                  onBlur = {() => {console.log('onBlur')}}
                  onChange = {() => {console.log('onChange')}}
                  onChangeText = {(text) => {
                    this.setState({searchText: text})
                    console.log('onChangeText')}}
                  value = {this.state.searchText}

                />
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => this.onSubmit(this.state.searchText) }>
                  <Text style={ { width: 50, height: 50 } } >Search</Text>
              </TouchableOpacity>
            </View>
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