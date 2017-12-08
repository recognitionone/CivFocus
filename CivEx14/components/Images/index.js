import React, { Component } from 'react';
import {View, Button, Text, TextInput, Slider} from 'react-native';

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

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count: 5};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    setInterval(() => this.setState({
      count: this.state.count-1
    }), 1000);
  }

  increment() {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  decrement() {
    const {count} = this.state;
    this.setState({count: count - 1});
  }

  render() {
    const {count} = this.state;
    return(<View  style={{flexDirection: 'row', alignContent:'space-between', 
    margin: 30, justifyContent: 'space-between'}}>
      <Text>{count}</Text>
      <Button title="Decrement" onPress={this.decrement}>( - )</Button>
      <Button title="Increment" onPress={this.increment}>( + )</Button>
    </View>);
  }
}

class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state={things:10};
  }
  render() {
    return(<Slider 
      style={{ width: 300 }}
      step={10}
      minimumValue={0}
      maximumValue={300}
      value={this.state.things}
      
    />)
  }
}

export default class ImagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'oo', 
      pftext: 360,
    };

    setInterval(() => this.setState({
      pftext: this.state.pftext-1
    }), 1000);

  }

  render(){
    return(
      <View style={{
        flex:1, 
        backgroundColor: '#f4f4f4', 
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
        
        <View style={{borderBottomColor: '#a0a0a0', borderBottomWidth: 1}}/>
        {/* <Blink plext='Po co ci kapusta'/> */}
        <Text>This is my number that goes down: {this.state.pftext}</Text>
        {/* <Clock /> */}
        <Counter />
        <View style={{borderBottomColor: '#a0a0a0', borderBottomWidth: 1}}/>
        <Text>Some text</Text>
        <MySlider />
        
      </View>
    )
  }
};