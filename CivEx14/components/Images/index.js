import React, { Component } from 'react';
import {View, Button, Text, TextInput, Slider, StyleSheet, Touchable} from 'react-native';


// class Inputs extends Component {
//    state = {
//       email: '',
//       password: ''
//    }
//    handleEmail = (text) ⇒ {
//       this.setState({ email: text })
//    }
//    handlePassword = (text) ⇒ {
//       this.setState({ password: text })
//    }
//    login = (email, pass) ⇒ {
//       alert('email: ' + email + ' password: ' + pass)
//    }
//    render(){
//       return (
//          <View style = {styles.container}>
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Email"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handleEmail}/>
            
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Password"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handlePassword}/>
               
//             <TouchableOpacity
//                style = {styles.submitButton}
//                onPress = {
//                   () ⇒ this.login(this.state.email, this.state.password)
//                }>
//                <Text style = {styles.submitButtonText}> Submit </Text>
//             </TouchableOpacity>
//          </View>
//       )
//    }
// }



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // text: 'Useless Placeholder',
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
    console.log("hello world");
  }

  render() {
    let myText = "Hi";
    return (
      <View style={styles.header}>
        <Text>{myText}: </Text>
        <TextInput 
          placeholder="What needs to be done"
          blurOnSubmit={false}
          returnKeyType={"done"}

          style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#FFD800', marginLeft: 1, paddingLeft: 8, minWidth: 150, justifyContent: "flex-start"}}
          // onChangeText={(text) => this.setState({text})}


          // onChange={ (value) => this.setState({ value })}
          onChangeText={ (value) => this.setState({value})}
          
          // onChangeText={this.props.onChange}

          // onAddItem={this.handleAddItem}
          onSubmitEditing={ () => this.handleAddItem}

          value={this.state.value}
          // onSubmitEditing={this.props.onAddItem}

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
  // input:{
  //   flex: 1,
  //   backgroundColor: "#FFD800"
  // }, 
  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }

  

})