import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World Again</Text>
        <Button          
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button          
          title="In Progress But not really"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ff00cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
