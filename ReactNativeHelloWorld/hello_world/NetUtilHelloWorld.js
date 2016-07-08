import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import NetUtils from '../utils/NetUtils';

export default class NetUtilHelloWorld extends Component{

  _getNetData = () => {
    NetUtils.get('http://apis.juhe.cn/ip/ip2addr?ip=www.juhe.cn&key=a95d35d9e038cf6a35fa852a4267db4a&dtype=json',(data) => {
      alert("data type:"+typeof data+",resultcode:"+data.resultcode+",reason:"+data.reason+",result:"+data.result+",");
    },(error) => {
      alert(error);
    })
  }

  _getXmlData = () => {
    NetUtils.getXml('http://apis.juhe.cn/ip/ip2addr?ip=www.juhe.cn&key=a95d35d9e038cf6a35fa852a4267db4a&dtype=xml',(data) => {
      console.log('callback data:'+data.toJSON());
      alert(data);
    },(error) => {
      alert(error);
    })
  }



    render(){
      return(<View>
                <TouchableOpacity onPress={() => this._getNetData()}>
                  <Text>get data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._getXmlData()}>
                  <Text>get xml data</Text>
                </TouchableOpacity>
             </View>);
    }
}

const styles = StyleSheet.create({

})
