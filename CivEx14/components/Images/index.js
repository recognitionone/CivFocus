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

export default class ImagesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {text: 'oo'};
  }

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
          {this.state.text.split(' ').map((word) => word && 'O').join('o')}
          <Greetings name={this.state.text}/>
        </Text>
        
        <Text>No hejhej</Text>
        
      </View>
    )
  }
};