/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView
} from 'react-native';


import HelloWorld from './react_native/hello_world_index';
import Test1 from './react_native/test1';
import AnimationHelloWorld from './react_native/animation_hello_world';
import AnimationTest2 from './react_native/animation_image_hello_world';
import ListViewExample from './react_native/ListViewExample';
import TextExample from './react_native/TextExample';
import AnimatedExample from './react_native/AnimatedExample';
import {Examples as AlertExample} from './react_native/AlertExample';
import DatePickerExample from './react_native/DatePickerAndroidExample';
import ImageExample from './react_native/ImageExample';
import ScrollViewExample from './react_native/ScrollViewExample';
import ViewPagerExample from './react_native/ViewPagerAndroidExample';
import AnExAppExample from './react_native/AnExApp';
import AnExBobble from './react_native/AnExBobble';
import ScrollTabBar from './hello_world/ScrollTabBar';
// import ToolBarAndroidExample from './react_native/ToolbarAndroidExample';

//mine code
import MineTextHelloWorld from './hello_world/TextHelloWorld';
import ComponentHelloWorld from './react_native/component_hello_world';
import MineExample from './react_native/hello_world_index';
import MineListViewHelloWorld from './hello_world/ListViewHelloWorld';
import MineScrollViewHelloWorld from './hello_world/ScrollViewHelloWorld';
import Test from './hello_world/test';
import TabViewHelloWorld from './hello_world/TabViewHelloWorld';
import TabBarTest from './hello_world/TabBarTestHelloWorld';




class ReactNativeHelloWorld extends Component {


        renderScene = (route,navigator) => {
                var Component = route.component;
                  return (<Component
                    navigator={navigator}/>);
              }

      render(){
        return(
          <Navigator
            initialRoute={{component: Root}}
            renderScene={this.renderScene}/>
        );
      }

}


class Root extends Component{

  constructor(){
    super();
    var ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1!==r2});

    var datas = [{title: "Text Hello World",content: MineTextHelloWorld},
                {title: "Scale Animation Hello World",content: AnimationHelloWorld},
                {title: "Image Animation Hello World",content: AnimationTest2},
                {title: "Common Component Hello World",content: ComponentHelloWorld},
                {title: "My Test Example",content: MineExample},
                {title: "ListView Example",content: ListViewExample},
                {title: "ScrollView Example",content: ScrollViewExample},
                {title: "ViewPager Example",content: ViewPagerExample},
                {title: "Alert Example",content: AlertExample},
                {title: "AnExAppExample",content: AnExAppExample},
                {title: "ListView Hello World",content: MineListViewHelloWorld},
                {title: "MineScrollViewHelloWorld",content: MineScrollViewHelloWorld},
                {title: "Test",content: Test},
                {title: "TabViewHelloWorld",content: TabViewHelloWorld},
                {title: "ScrollTabBar",content: ScrollTabBar},
                {title: "TabBarTest",content: TabBarTest}];

    this.state={
      dataSource: ds.cloneWithRows(datas)
    }
  }


    renderRow = (rowData,sectionId,rowId) => {
      return(
          <View><Text style={styles.style_text} onPress={()=>this.jump(rowData, rowId)}>{rowData.title}</Text></View>
      );
    }

    jump = (rowData, index) => {
       this.props.navigator.push({component: rowData.content});
     }


  render() {
    return (
          <ListView
            style={{flex: 1}}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}>
    </ListView>);}



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  style_text: {
    fontSize: 15,
    color: '#889944',
    margin: 10
  }
});

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
