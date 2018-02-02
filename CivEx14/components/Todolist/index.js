import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ListView, Keyboard} from 'react-native';
import Header from '../Todolist/Header'
import Footer from '../Todolist/Footer'



class Row extends Component {

  render() {
        // <Text>{this.props.text}</Text>
    return (
      <View>
        <Text>[{this.props.item.isComplete ? "Yyy" : "E."}]  {this.props.item.text}</Text>
      </View>
    )
  }
}

// class TasksList extends Component { 
//   constructor (props) { 
//     super (props); 

//     // const ds = new ListView.DataSource({ 
//     //   rowHasChanged: (r1, r2) => r1 !== r2 
//     // }); 

//     this.state = { 
//       // dataSource: ds.cloneWithRows([ 
//       //   'Buy milk', 
//       //   'Walk the dog', 
//       //   'Do laundry', 
//       //   'Write the first chapter of my book' 
//       // ]) 
//     }; 
//   } 

//   render () { 
//     return ( 
//       <ListView 
//         style={styles.list}
//         enableEmptySections
//         dataSource={ this.state.dataSource } 
//         onScroll={() => Keyboard.dismiss()}
//         renderRow={ (key, ...value) => {
//           return ( <Row key={key} {...value} /> )
//         }} 
//         renderSeparator={(sectionId, rowId) => {
//           return <View key={rowId} style={styles.separator} />
//         }}
//       /> 
//     ); 
//   } 
// } 

export default class TodolistScreen extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    }); 

    this.state = {
      allComplete: false,
      value: "poooooo",
      items: [],
      items2: [],
      count: 0,
      pizza: '',
      searchText: 'dyyyyyyyyyym',
      searchText2: '',
      // dataSource: ds.cloneWithRows([])


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
        // 'Walk the dog', 
        // 'Do laundry', 
        // 'Write the first chapter of my book' 
      ]) 



      // name: 'name input',
      // stuffandthings: '',
      // username: '',
      // password: ''
    }
    // this.handleAddItem = this.handleAddItem.bind(this);
    // this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onPressDone = this.onPressDone.bind(this);
    this.setSource = this.setSource.bind(this);

    // this.handleChange = this.handleChange.bind(this);
  }

  // onPress = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })

  setSource(items2, itemsDataSource, otherState = { }) {
    this.setState({
      items2,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState
    })
  }

  onPress() {
    this.setState({
      count: this.state.count+1
    })
  }

  onSubmit(stuff) {
    // console.table({stuff});
    if(!{stuff}) return;
    console.log('the stuff: ' + stuff);
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: stuff,
        isComplete: false
      }
    ]
    console.log(newItems)
    console.log(this.state.items)

    this.setState({
      items: newItems,
      searchText: ''
      
    })
    // console.table({newItems});
    // console.table(newItems);
    // console.log(newItems);
  }

  onSubmit2(stuff) {
    // console.table({stuff});
    if(!{stuff}) return;
    const newItems2 = [
      ...this.state.items2,
      {
        key: Date.now(),
        text: stuff,
        isComplete: false
      }
    ]
    console.log(newItems2)
    console.log(this.state.items2)
    this.setSource(newItems2, newItems2, {searchText2: ''})
    // this.setState({
    //   items2: newItems2,
    //   searchText2: ''
      
    // })
    // console.table({newItems2});
    // console.table(newItems2);
    // console.log(newItems2);
  }

  onPressDone(stuff3) {
    const isComplete = !this.state.allComplete;
    const newItems2 = this.state.items2.map((item) => ({
      ...item,
      isComplete
    }))
    this.setSource(newItems2, newItems2, { allComplete: isComplete })
    // this.setState({
    //   items2: newItems2,
    //   allComplete: isComplete
    // })

    console.table({newItems2})
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

  // handleToggleAllComplete() {
  //   const complete = !this.state.allComplete;
  //   const newItems = this.state.items.map((item) => ({
  //     ...item,
  //     complete
  //   }))
    
  //   this.setState({
  //     items: newItems,
  //     allComplete: complete
  //   })
  //   console.table(this.state.value);
  // }




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

          <View style={styles.textinputbox}
            >
            <View style={{flex:4}}>
              <TextInput
                  // onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
                  style={{backgroundColor:'transparent'}}
                  // onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
                  // onFocus = {() => {console.log('onFocus')}}
                  // onBlur = {() => {console.log('onBlur')}}
                  // onChange = {() => {console.log('onChange')}}
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

          <View>
            <ListView 
              style={styles.list}
              enableEmptySections
              onScroll={() => Keyboard.dismiss()}
              renderSeparator={(sectionId, rowId) => {
                return <View key={rowId} style={styles.separator} />
              }}
              dataSource={ this.state.dataSource } 
              renderRow={ (item, ...values) => {
                console.log(values);
                console.log(item);
                // return ( <Row text={text} {...values} /> )
                return ( <Row item={item} {...values} /> );
              }} 
              
            /> 
          </View>
          
          <View style={styles.textinputbox}
            >
            <View style={{flex:4}}>
              <TextInput
                  // onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
                  style={{backgroundColor:'transparent'}}
                  // onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
                  onFocus = {() => {console.log('onFocus')}}
                  onBlur = {() => {console.log('onBlur')}}
                  onChange = {() => {console.log('onChange')}}
                  placeholder = 'I am a placeholder'
                  onChangeText = {(text2) => {
                    this.setState({searchText2: text2})
                    console.log('onChangeText')}}
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
                  <Text style={ { width: 50, height: 50, marginRight: 10 } } >Done</Text>
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