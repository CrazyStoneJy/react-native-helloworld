import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

export default class StyleHelloWorld extends Component{

    render(){
    return(<View>
        <Text style={styles.font_style1}>first show</Text>
        <Text style={styles.font_style2}>second show</Text>
      </View>);
    }
}

var styles=StyleSheet.create({
  font_style1:{
    fontSize: 34,
    alignItems: 'center',
    color: '#ff0000'
  },
  font_style2:{
    fontSize: 20,
    color: '#00ff00'
  }

});
