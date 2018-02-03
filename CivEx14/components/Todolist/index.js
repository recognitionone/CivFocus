import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ListView, Keyboard} from 'react-native';
import Header from '../Todolist/Header'
import Footer from '../Todolist/Footer'



class Row extends Component {
  render() {
    return (
      <View style={styles.listRow}>
        <Text style={styles.textRow}>[{this.props.item.isComplete ? "Y" : "N"}]  {this.props.item.text}</Text>
      </View>
    )
  }
}

export default class TodolistScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    }); 

    this.state = {
      allComplete: false,
      items: [],
      searchText: '',
      dataSource: ds.cloneWithRows([]) 
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onPressDone = this.onPressDone.bind(this);
    this.setSource = this.setSource.bind(this);
  }

  setSource( items, itemsDataSource, otherState = {} ) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState
    })
  }

  onSubmit(stuff) {
    if(!{stuff}) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: stuff,
        isComplete: false
      }
    ]
    this.setSource(newItems, newItems, {searchText: ''})
  }

  onPressDone(anything) {
    const isComplete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      isComplete
    }))
    this.setSource(newItems, newItems, { allComplete: isComplete })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{ marginTop: 5 }}>
            <ListView 
              style={styles.list}
              enableEmptySections
              onScroll={() => Keyboard.dismiss()}
              renderSeparator={(sectionId, rowId) => {
                return <View key={rowId} style={styles.separator} />
              }}
              dataSource={ this.state.dataSource } 
              renderRow={ (item, ...values) => {
                return ( <Row item={item} {...values} /> );
              }} 
            /> 
          </View>
          <View style={styles.textinputbox}>
            <View style={{flex:4}}>
              <TextInput
                  style={{backgroundColor:'transparent'}}
                  placeholder = 'I am a placeholder'
                  onChangeText = {(text) => {
                    this.setState({searchText: text})
                  }}
                  value = {this.state.searchText}
                />
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => this.onSubmit(this.state.searchText) }>
                  <Text style={ { width: 50, height: 50 } }>Search</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => this.onPressDone(this.state.searchText) }>
                  <Text style={{ width: 50, height: 50, marginRight: 10 }}>Done</Text>
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
  },
  list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5'
  },
  textinputbox: {
            flexDirection:'row', 
            width: window.width, 
            margin: 10, padding:4, 
            alignItems:'center', 
            justifyContent:'center', 
            borderWidth:4, 
            borderColor:'#888', 
            borderRadius:10, 
            backgroundColor:'#fff'
  },
  listRow: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textRow: {
    fontSize: 14,
    margin: 2
  }
})