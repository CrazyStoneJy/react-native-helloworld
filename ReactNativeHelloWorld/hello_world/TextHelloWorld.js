import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableHighlight,ToastAndroid,ScrollView,Image} from 'react-native';
import UITitle from '../hello_world/UITitle';

export default class TextHelloWorld extends Component{

     click2Toast = (msg) => {
      ToastAndroid.show(msg,ToastAndroid.SHORT);
    }


    render(){

      var imgUrl='http://gtms03.alicdn.com/tps/i3/TB1Kcs5GXXXXXbMXVXXutsrNFXX-608-370.png';

      return(
        <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <UITitle title="font style"/>
          <Text style={[{fontFamily: 'sans-serif',fontStyle: 'italic'},styles.style_common_font]}>italic font text</Text>
          <Text style={[{fontFamily: 'sans-serif'},styles.style_common_font]}>normal font text</Text>
          <UITitle title="font weight"
                  description="对title文字的描述"/>
          <Text style={[{fontFamily: 'sans-serif',fontWeight: 'bold'},styles.style_common_font]}>bold font text</Text>
          <Text style={[{fontFamily: 'sans-serif'},styles.style_common_font]}>normal font text</Text>
          <UITitle title="text Decoration"/>
          <Text style={[styles.style_common_font]}>
            <Text style={{textDecorationLine: 'underline'}}>underline text </Text>
            <Text style={{textDecorationLine: 'line-through'}}> line through text</Text>
            <Text style={{textDecorationLine: 'underline line-through'}}> line through and undderline text</Text>
          </Text>
          <UITitle title="text touch can toast"/>
          <TouchableHighlight>
              <Text style={[styles.style_common_font,styles.style_button]}
              onPress={() => this.click2Toast("press me")}> press me </Text>
          </TouchableHighlight>
          <UITitle title="text align"/>
          <View>
              <Text style={[{textAlign: 'left'},styles.style_common_font]}>text align left</Text>
              <Text style={[{textAlign: 'center'},styles.style_common_font]}>text align center</Text>
              <Text style={[{textAlign: 'right'},styles.style_common_font]}>text align right</Text>
          </View>
          <UITitle title="text generate space"/>
            <Text style={{fontSize: 25}}>
              A {'generated'} {' '} {'string'} and some&nbsp;&nbsp;&nbsp;spaces
            </Text>
        </View>
        <UITitle title="image in text"/>
        <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
          <Text style={styles.style_common_font}>image in text<Image style={{height: 100,width: 100}} source={{uri: imgUrl}}/></Text>
        </View>
        <UITitle title="text shadow"/>
        <Text style={{marginLeft:10,marginBottom:10,fontSize: 25, textShadowOffset: {width: 3, height: 3}, textShadowRadius:5, textShadowColor: '#00cccc'}}>
          Demo text shadow
        </Text>
        <UITitle title="text limit line"/>
        <Text style={{fontSize: 20,margin: 10}}
              numberOfLines={1}>
          hahahahah ahahhahahaha hahahahahah hahahahaha hahahhahah hahahahhah hahahhahah ajfdoasnofnoanfna ajfniocnasdnofno
        </Text>
      </ScrollView>);
  }
}

const styles = StyleSheet.create({

      style_common_margin: {
        margin: 10
      },
      style_common_font: {
        fontSize: 35,
        margin: 10
      },
      style_button: {
        borderRadius: 8,
        borderColor: 'blue',
        borderWidth: 2,
        backgroundColor: 'red'
      }

})
