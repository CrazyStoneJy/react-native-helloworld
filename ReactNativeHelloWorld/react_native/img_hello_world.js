import React,{Component} from 'react';
import {AppRegistry,Text,View,Image} from 'react-native';

export default class ImageHelloWorld extends Component{
//网络图片必须指定图片的大小
      render(){
          return (
            <View>
              <Image source={require('../image/choice_male_1@3x.png')}/>

              <Image source={{uri : 'https://facebook.github.io/react/img/logo_og.png'}}
              style={{"width":200 , "height":200}}/>


              <Image source={require('../image/choice_male_1@3x.png')}>
                <Text style={{alignItems: 'center',margin: 20}}>heheda</Text>
              </Image>
            </View>
          );
      }





}
