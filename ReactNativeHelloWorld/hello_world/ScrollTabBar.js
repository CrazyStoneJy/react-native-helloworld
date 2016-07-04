import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ScrollableTabView  from 'react-native-scrollable-tab-view';

export default class ScrollTabBar extends Component{
    render(){
      return( <ScrollableTabView>
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
              </ScrollableTabView>);
    }
}






const styles = StyleSheet.create({

})
