import React,{Component} from 'react';
import {View,StyleSheet,ToastAndroid,Text,TouchableOpacity,Alert,ProgressBarAndroid,InteractionManager} from 'react-native';

var url = 'http://apis.juhe.cn/ip/ip2addr?ip=www.juhe.cn&key=a95d35d9e038cf6a35fa852a4267db4a&dtype=json';
var xmlURL = 'http://www.baidu.com';
export default class NetWorkHelloWorld extends Component{


    constructor(){
      super();
      this.state={
        isLoading: true
      }
    }



      componentWillMount(){
        console.log('componentWillMount');
        // ToastAndroid.show('componentWillMount',ToastAndroid.SHORT);
      }

      componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
        console.log('componentWillUnmount');
      }

      componentDidMount(){
        console.log('componentDidMount');
        // ToastAndroid.show('componentDidMount',ToastAndroid.SHORT);
        this.timer = setTimeout(() => {
          InteractionManager.runAfterInteractions(() => {
            alert('loading finish')
          });
        },2000)

      }


      // _loadingView = () => {
      //   console.log('loading view');
      //   return(
      //
      //   )
      // }



    _fetchJSONData = (url,successfulCallback,errorCallback) => {
      console.log('fectch json data');
      console.log('isloading'+this.state.isLoading);
      // if(this.state.isLoading){
      //   console.log('isloading');
      //   return this._loadingView();
      // }
      fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        // ToastAndroid.show(responseText,ToastAndroid.LONG);
          // console.log(responseText);
          successfulCallback(JSON.parse(responseText));

      })
      .catch((error) => {
        errorCallback(error);
        // console.warn(error);
      });
    }


      _fetchXMLData = (url) => {

          var request = new XMLHttpRequest();
          request.onreadystatechange = (e) => {
                  if(request.readyState !==4 ){
                    return;
                  }

                  if(request.state === 200){
                    ToastAndroid.show(request.responseText,ToastAndroid.LONG);
                  }
                }
          request.oepn('GET','http://www.baiud.com');
          request.send();
      }


      _success = (obj) => {
          alert("resultcode:"+obj.resultcode+",reason:"+obj.reason+",result:"+obj.result+",");
      }

      _error = (error) => {
          alert(error);
      }



    render(){
      return(
        <View style={{flex: 1,flexDirection: 'column'}}>

            <TouchableOpacity onPress={() => this._fetchJSONData(url,this._success,this._error)}>
                <Text style={styles.style_text}>click me get json data</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._fetchXMLData(url)}>
                <Text style={styles.style_text}>click me get xml data</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({

      style_text: {
        fontSize: 18,
        color: 'red',
        margin: 20,
      }



})
