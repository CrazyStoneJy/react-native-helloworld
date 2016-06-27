import React,{Component} from 'react';
import {View,Image,Animated} from 'react-native';

export default class AnimtionTest2 extends Component{

      constructor(){
        super();
        this.state={
          bounceValue: new Animated.Value(0),
        }

      }

      render(){
          return(
            <Animated.Image style={{flex: 1,transform: [{scale: this.state.bounceValue}]}}
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}/>
          );
      }

      componentDidMount(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
          this.state.bounceValue,
          {
            toValue: 0.8,
            friction: 1,
          }
        ).start();
      }

}
