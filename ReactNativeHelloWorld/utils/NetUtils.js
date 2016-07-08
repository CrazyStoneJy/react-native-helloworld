import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

export default class NetUtils extends Component{

  static post (url,data,successCallBack,failCallBack){
    var fetchOptions = {
      method: 'POST',
      headers: {
     'Accept': 'application/json',
     //json形式
     'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url,fetchOptions).
    then((reponse) => response.text()).
    then((responseText) => {
      console.log('json data:'+JSON.parse(responseText));
      successCallBack(JSON.parse(responseText));
    }).
    catch((error) => {
      console.log('json error');
      failCallBack(error);
    }).done();

  }


  static get (url,successCallBack,failCallBack){
        fetch(url).
        then((response) => response.text()).
        then((responseText) => {
          successCallBack(JSON.parse(responseText));
        }).
        catch((error) => {
          failCallBack(error);
        }).done();
  }


//似乎有问题
  static getXml (url,successCallBack,failCallBack){
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if(request.readyState !== 4){
        return;
      }
      if(request.state ===200){
        console.log('state code 200,sucess');
        successCallBack(request.responseText);
      }else{
        failCallBack(request.error);
        console.log('error');
      }
    }


  }






}
