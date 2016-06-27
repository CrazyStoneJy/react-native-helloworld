import React,{Component} from 'react';
import {AppRegistry,Text, View,TouchableHighlight} from 'react-native';

export default class TextHelloWorld extends Component {

constructor () {
  super();
}

  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <TouchableHighlight onPress={() => this.goBack()}>
          <Text>go back</Text>
        </TouchableHighlight>
      </View>

  )
}

goBack(){
  this.props.navigator.pop();
}


}
