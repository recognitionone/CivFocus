import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ListView, Keyboard} from 'react-native';
import Header from '../Todolist/Header'
import Footer from '../Todolist/Footer'



class Row extends Component {
  render() {
    return (
      <View>
        <Text>[{this.props.item.isComplete ? "Y" : "N"}]  {this.props.item.text}</Text>
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
      items2: [],
      searchText2: '',

      dataSource: ds.cloneWithRows([ 
        {
          key: Date.now(),
          text: "Tańczyć",
          complete: false
        }, 
        {
          key: Date.now(),
          text: "Zapalać znicze",
          complete: false
        },
        {
          key: Date.now(),
          text: "Wciągać dyyyyyyyyyym",
          complete: false
        }, 
      ]) 
    }
    this.onPress = this.onPress.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onPressDone = this.onPressDone.bind(this);
    this.setSource = this.setSource.bind(this);
  }

  setSource( items2, itemsDataSource, otherState = {} ) {
    this.setState({
      items2,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState
    })
  }

  onSubmit2(stuff) {
    if(!{stuff}) return;
    const newItems2 = [
      ...this.state.items2,
      {
        key: Date.now(),
        text: stuff,
        isComplete: false
      }
    ]
    this.setSource(newItems2, newItems2, {searchText2: ''})
  }

  onPressDone(stuff3) {
    const isComplete = !this.state.allComplete;
    const newItems2 = this.state.items2.map((item) => ({
      ...item,
      isComplete
    }))
    this.setSource(newItems2, newItems2, { allComplete: isComplete })
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
                  onChangeText = {(text2) => {
                    this.setState({searchText2: text2})
                  }}
                  value = {this.state.searchText2}
                />
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => this.onSubmit2(this.state.searchText2) }>
                  <Text style={ { width: 50, height: 50 } } >Search</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={ () => this.onPressDone(this.state.searchText2) }>
                  <Text style={{ width: 50, height: 50, marginRight: 10 }} >Done</Text>
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
    fontSize: 24,
  }
})