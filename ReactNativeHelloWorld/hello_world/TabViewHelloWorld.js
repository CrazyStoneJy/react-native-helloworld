/* @flow */
'use strict';
import React,{Component} from 'react';
//var React = require('react-native');
var TabView = require('./TabView');

import {
 StyleSheet,
 View,
} from 'react-native';

  var titlesToBeShown;
  var indexNumber;

export default class TabViewHelloWorld extends Component{

 // getInitialState: function() {
 //   return (
 //     titlesToBeShown: ['First', 'Second', 'Third', 'fourth','fifth']
 //   )
 // },

constructor(){
  super();
  this.state={
     titlesToBeShown: ['First', 'Second', 'Third', 'fourth','fifth'],
     index:1,
  }
}





 render() {

  var pressed = (sectionNumber: indexNumber) => {
     this.setState({
       sectionNumber
     });
   }


   return (
     <View style={styles.container}>
       <TabView
         titles={this.state.titlesToBeShown} // send the data in the form of Array
         indexNumber={this.state.index} // has integer value of each selected tab (active)
         //onPress={(indexNumber) => this.pressed(indexNumber)}
         onPress={pressed.bind(this,indexNumber)}
         />
     </View>
   );
 }
}


var styles = StyleSheet.create({
 container: {
   flex: 1
 }
});
