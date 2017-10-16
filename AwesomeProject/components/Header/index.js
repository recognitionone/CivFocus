import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const styles = StyleSheet.create({
    header: {
      flex:1,
      justifyContent:'space-between',
      flexDirection:'row'
    },
    btn:{
        flex:1,
        height:10
    }
  });

export default class Header extends React.Component{
    render(){
        return (<View style={styles.header}>
                    <Button style={styles.btn}
                    title="baby"
                    color="green"
                    />
                    <Button style={styles.btn}
                    title="maal"
                    color="green"
                    />
                    <Button style={styles.btn}
                    title="vaal"
                    color="green"
                    />
                </View>)
    }
} 