import React,{Component} from 'react';
import {View,StyleSheet,Text,NativeModlues} from 'react-native';
import Log from './Log';

export default class Test extends Component{

render(){

  return(
  <View>
    <Text style={styles.style_text}
       onPress={() => this._log()}>hello Text</Text>
  </View>
  )
}

_log = () => {
  // return(
    console.log(">>>>>heheheheh");
    // Log.log("TAG",">>>>ehfbajbfiuas");
    Log.logwithName("<<>>>>>>>>>>>>>>>");
  // )

  //  NativeModlues.log("Test",">>>hahahah");
}


}

const styles = StyleSheet.create({

    style_text: {
      flex: 1,
      fontSize: 20,
      color: 'red'
    }


})
