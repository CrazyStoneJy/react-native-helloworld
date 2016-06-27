import React,{Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class Test1 extends Component{

  constructor(){
    super();

    var key=Object.keys(Image.resizeMode).join(' ');

    console.log('key:'+key);


  }






  render(){
    var imgUrl='http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png';

    return(
      <View style={styles.style_parent}>
        <Text style={styles.style_text1}>first text</Text>
        <Text style={styles.style_text2}>second text</Text>
        <View style={styles.style_border1}>
          <Text>ni hao a</Text>
        </View>
        <View style={{color: '#00ff00',height: 60,flex: 1}}>
        <Image style={{height: 100, width: 300,resizeMode: Image.resizeMode.cover }}
              source={{uri: imgUrl}} />
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({

style_parent: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#338899',
  alignItems: 'center'
},

style_text1: {
  fontSize: 20,
  margin: 10,
  textAlign: 'center',
  color: '#000000',
  fontWeight: 'bold',
  fontStyle: 'italic'
},

style_text2:{
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
  color: '#ff0000'
},

style_border1: {
  height: 50,
  width: 200,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderColor: '#0000ff',
  borderRadius: 10
},
style_image1: {
  height: 100,
  width: 200
},

})
