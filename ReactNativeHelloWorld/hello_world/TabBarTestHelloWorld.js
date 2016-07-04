import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import TabBar from './TabBarHelloWorld';

export default class TabBarTestHelloWorld extends Component{

    constructor(){
      super();
      this.state={
        datas: ['TAB1','TAB2','TAB3','TAB4','TAB5'],
      }
    }






    render(){
      return(<TabBar datas={this.state.datas}
                      index={0}
                      unselectColor={'red'}
                      selectedColor={'green'}/>);
    }
}

const styles = StyleSheet.create({

})
