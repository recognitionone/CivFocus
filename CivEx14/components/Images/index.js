import React, { Component } from 'react';
import {View, Button, Text, TextInput} from 'react-native';

// import ActionButton from 'react-native-circular-action-menu';
// import Icon from 'react-native-vector-icons/Ionicons';


// export default class ImagesScreen extends Component {
//   render(){
//     const { navigate } = this.props.navigation;
//     return (
//         <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
//           {/*Rest of App come ABOVE the action button component!*/}
//           <ActionButton buttonColor="rgba(231,76,60,1)">
//             <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
//               <Icon name="android-create"  />
//             </ActionButton.Item>
//             <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
//               <Icon name="android-notifications-none"  />
//             </ActionButton.Item>
//             <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
//               <Icon name="android-done-all"  />
//             </ActionButton.Item>
//           </ActionButton>
//         </View>
//       );
//     }
//   }

class Greetings extends Component {
  render() {
    return (
      <Text style={{fontWeight: "bold"}}>Hello {this.props.name}!?</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {score: true};

    setInterval(() => {
      this.setState(prevState => {
        return {
          score: !prevState.score
        }
      })
    }, 1000);
  }

  render() {
    // let display = this.state.showText ? this.props.text : 'dupa';
    let display = this.state.score ? this.props.plext : 'o w dupę';
    return (
      <View>
        <Text>{display}!</Text>
      </View>  
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state={leClock: new Date()}

    
      setInterval(() => this.setState({
        leClock: new Date()
      }), 1000);
    
  }

  render() {
    return(<Text>{this.state.leClock.toLocaleTimeString()}</Text>);
  }
}

export default class ImagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'oo', 
      pftext: 0,
    
    };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.setState({
  //       pftext: this.state.pftext+1
  //     }), 1000);
  // }

  componentDidMount() {
    setInterval(() => this.setState({
        pftext: this.state.pftext+1
      }), 1000);
  }

 

  // setInterval(() => {
  //   this.setState(prevState => {
  //     return {
  //       score: !prevState.score
  //     }
  //   })
  // }, 1000);

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // } 

  // tick() {
  //   this.setState({
  //     pftext: this.state.pftext+1
  //   });
  // }

  // leClock: new Date()
  render(){
    return(
      <View style={{
        flex:1, 
        backgroundColor: '#faf345', 
        padding: 10, 
        }}>

        <TextInput 
          style={{height: 40}}
          placeholder="some placeholder"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({text})}
        />
        
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && ' ').join('o')}
          <Greetings name={this.state.text}/>
        </Text>
        
        <Blink plext='Po co ci kapusta'/>
        <Text>{this.state.pftext}</Text>
        <Clock />
        
      </View>
    )
  }
};