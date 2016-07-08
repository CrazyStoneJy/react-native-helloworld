import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class JSONHelloWorld extends Component{

    constructor(){
      super();
      this.state={
        data: [
          {title: "test1",
          content: "content1",},
          {title: "test2",
          content: "content2",},
          {title: "test3",
          content: "content3",},
        ]
      }
    }

      // _json = () => {
      //   return({
      //     JSON.stringify(this.state.data)
      //   })
      // }


    render(){
      return(<View style={{flex: 1}}>
              <Text style={styles.style_text}>{JSON.stringify(this.state.data)}</Text>
            </View>);
    }
}

const styles = StyleSheet.create({
    style_text: {
      fontSize: 20,
      color: 'green',
    },
})
