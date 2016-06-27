import React,{Component} from 'react'
import {View,TouchableHighlight,LayoutAnimation,Text,StyleSheet} from 'react-native'

export default class AnimationHelloWorld extends Component{

constructor(){
  super();
  this.state={
    w: 100,
    h:100
  }
}


    onclick = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({w: this.state.w+15 , h: this.state.h+15})
    }


    render(){
      return(
        <View style={[{flex: 1},styles.style_haha]}>
          <View style={[styles.box,{width: this.state.w , height: this.state.h}]}/>
          <TouchableHighlight onPress={()=>this.onclick()}>
            <Text style={styles.style_text}>click me</Text>
          </TouchableHighlight>
        </View>
      );
    }


}


var styles=StyleSheet.create({
  style_haha: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: '#ff0000'
  },
  style_text: {
    fontSize: 20,
  }
})
