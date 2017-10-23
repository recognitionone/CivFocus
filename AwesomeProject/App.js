import React, { Component } from 'react';

// import { StyleSheet, Text, View, Button, AppRegistry, Image  } from 'react-native';
import {  StyleSheet, AppRegistry, Image, Text, View, Button  } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World Again</Text>
//         <Button          
//           title="Learn More"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Button
//           onPress="none"          
//           title="In Progress But not really"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Text>One more time Hello World Again</Text>

//       </View>
//     );
//   }
// }

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/GPB_circling_earth.jpg/240px-GPB_circling_earth.jpg'
    };
    return (
      
      
        // <Image source={pic} style={{width: 194, height: 310}}/>
        <Image source={pic} }/>
        

      
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ff00cc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
