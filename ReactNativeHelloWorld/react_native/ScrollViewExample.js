import React,{ Component } from 'react';
import {View,ScrollView,Text,StyleSheet,TouchableOpacity,Image,ToastAndroid} from 'react-native';


// 图片
var IMAGES = [
  require('../images/total_girls.png'),
  require('../images/jessicajung.png'),
  require('../images/kimhyoyeon.png'),
  require('../images/seohyun.png'),
  require('../images/sooyoung.png'),
  require('../images/sunny.png'),
  require('../images/taeyeon.png'),
  require('../images/tiffany.png'),
  require('../images/yoona.png'),
  require('../images/yuri.png'),
];

// 名字
var NAMES = [
  'Girls\' Generation',
  'Jessica Jung',
  'Kim Hyo Yeon',
  'Seo Hyun',
  'Soo Young',
  'Sunny',
  'Taeyeon',
  'Tiffany',
  'Yoona',
  'Yuri'
];


export default class ScrollViewHelloWorld extends Component{
    render(){
      return(
        <ScrollView
          style={styles.container}>
          {IMAGES.map(createCardRow)}
        </ScrollView>);
    }
}

// 批量创建
var createCardRow = (img, i) => <Card key={i} img={img} num={i}/>;

class Card extends Component{
  // Card视图
    showToast = (num,i) => {
      ToastAndroid.show(NAMES[num].toString(), ToastAndroid.SHORT);
    }

    render() {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showToast(this.props.num)}
        >
          <View style={styles.blank}/>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={this.props.img}/>
          <View style={styles.blank}/>
        </TouchableOpacity>
      );
    }



}


var styles = StyleSheet.create({

  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'red',
  },

  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  image: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FF1492',
  },

  blank: {
    width: 10,
  }
});
