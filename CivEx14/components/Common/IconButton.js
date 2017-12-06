import React, { Component } from 'react';
import {View,Text,Button,TouchableOpacity, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'

export const IconButton=({name,color,id,onPress,...props})=>{
    return <TouchableOpacity
    style={styles.iconBtn}
    onPressIn={()=>{onPress(id)}}
  >
    <Icon name={name}  size={20} color={color} />
  </TouchableOpacity>
} 
const iconList=[{
    name:'domain',
    color:'#01a699',
    id:'FocusRoom'
},{
    name:'people',
    color:'#01a699',
    id:'CityView'
},{
    name:'mood',
    color:'#01a699',
    id:'Stats'
},{
    name:'mood',
    color:'#01a699',
    id:'Images'
},
// {
//     name:'whatshot',
//     color:'#01a699',
//     id:''
// }
]

export const IconButtonList=({onPress})=>(
    <View>{iconList.map((item,i)=> <IconButton key={i} onPress={onPress} {...item}/>)}</View>
)

const styles=StyleSheet.create({
    iconBtn:{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:40,
            height:40,
            margin:5,
            backgroundColor:'#fff',
            borderRadius:50
    },
    iconList:{
        position:'absolute'
    }
})

export class IconDropDown extends Component{
    constructor(){
        super()
        this.state={
            isOpen:false
        }
        this.onPress=this.onPress.bind(this)
        this.iconBtnPress=this.iconBtnPress.bind(this)
    }

    iconBtnPress(id){
            this.props.navigate(id)
    }

    onPress(){
       this.setState({
           isOpen:!this.state.isOpen
       })
    }

    render(){

        return <View style={styles.iconList}>
                    <IconButton name={'menu'} color={'#ff234E'} onPress={this.onPress} />
                    {this.state.isOpen?<IconButtonList onPress={this.iconBtnPress} />:null}
              </View>
    }
}

