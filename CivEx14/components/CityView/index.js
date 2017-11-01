import React, { Component } from 'react';
import {View,Text,Button, StyleSheet} from 'react-native'
import PercentageCircle from 'react-native-percentage-circle';

export default class CityView extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text> Hello World 1 </Text>
                </View>)
      }
    }


    
    
    
    // class FocusRoomScreen extends React.Component {
    //     constructor(props){
    //       super(props);
    //       this.state={
    //         percent:0,
    //         startAngle:0,
    //         angleLength:1,
    //         textValue:0,
    //         time:moment(new Date()).format('MM:SS')
    //       }
    //       this.onBtnPress=this.onBtnPress.bind(this)
    //       this.onUpdate=this.onUpdate.bind(this)
    //     }
    //     static navigationOptions = {
    //       title: 'Welcome to Focus Room',
    //     }
      
    //     onBtnPress(){
    //       var x=this.state.percent
    //       setInterval(function(){
    //         if(x<100){
    //           this.setState({percent:x+1})
    //           x+=1
    //         }
    //       }.bind(this),1000)
    //     }
      
    //     render() {
    //       const { navigate } = this.props.navigation;
    //       return( <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //                 {/* <PercentageCircle radius={100} borderWidth={20} 
    //                 children={<Text>{this.state.percent}</Text>} percent={this.state.percent}
    //                 textStyle	={{fontSize: 26, color: 'red'}}
    //                 color={"#3498db"}></PercentageCircle>  */}
    //                 <View style={styles.sleepTimeContainer}>
    //                   <Text style={styles.textValue}>{this.state.textValue}</Text>
    //                 </View>
    //                 <Timer />
    //                 <Text>{this.state.time}</Text>
    //                 <Button title={'Start'} onPress={this.onBtnPress}/> 
    //               </View>)
    //     }
    //   }    
