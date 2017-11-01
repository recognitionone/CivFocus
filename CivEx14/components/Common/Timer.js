import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CircularSlider from 'react-native-circular-slider';

var momemt=require('moment')

export default class Timer extends Component{
    constructor(){
        super()
        this.state={
            startAngle:0,
            angleLength:0,
            mintues:'00',
            seconds:'00',
            btnText:'Start'
        }
        this.timer = null;
        this.onUpdate=this.onUpdate.bind(this)
        this.onStartPress=this.onStartPress.bind(this)
    }

    onStartPress() {
        this.setState({
            btnText:this.state.btnText=='Start'?'Stop':'Start'
        })
        if (this.timer){
            clearInterval(this.timer);
            this.timer = null;
        } else {
            this.timer = setInterval(()=>{
                let m=this.state.mintues
                let s=this.state.seconds;
                if(parseInt(m)===0 && parseInt(s)===0)
                {
                    clearInterval(this.timer)
                    this.timer=null
                    this.setState({
                        btnText:'Start'
                    })
                } else {
                    if(parseInt(s) === 0)
                    {
                        s='59'
                        m = parseInt(m) - 1;
                        m=m<10?`0${m}`:m
                    } else {
                        s = parseInt(s) - 1;
                        s=s<10?`0${s}`:s
                    }
                }
                this.setState({
                    mintues:m,
                    seconds:s
                })
            },1000)
        }
    }

    getTextValue(angle){
        let val=Math.ceil((angle*100)/(2*Math.PI))
        return val
      }

    onUpdate(timeObj){
        let x=timeObj.angleLength
        let m=this.getTextValue(timeObj.angleLength)
        this.setState({
            startAngle: 2*Math.PI,
            angleLength:x,
            mintues:m<10?`0${m}`:m
          })
    }
    render(){
        let time=this.state.mintues+':'+this.state.seconds
        return (<View><CircularSlider
            startAngle={this.state.startAngle}
            angleLength={this.state.angleLength}
            onUpdate={this.onUpdate}
            segments={5}
            strokeWidth={20}
            radius={80}
            gradientColorFrom="#ff9800"
            gradientColorTo="#ffcf00"
            clockFaceColor="#9d9d9d"
            bgCircleColor="#171717"
          />
            <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'green',margin:10}}>{time}</Text>
                    <Button title={this.state.btnText} onPress={this.onStartPress}/>
            </View>
          </View>
        )
    }
}