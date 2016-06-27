import React,{Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableHighlight} from 'react-native';

export default class UITitle extends Component{

  // constructor(props){
  //   super(props);
  // }

      propTypes: {
        title: React.propTypes.string,
        description: Rect.propTypes.string,
        isGoBack: React.propTYpes.bool
      }

      goBack () {
          this.props.navigator.pop();
        }


      render(){
        var desc;
        var img;
        if (this.props.description) {
           desc =
                <Text style={styles.style_description}>
                 {this.props.description}
                </Text>;
        }

       //fixme 写法有问题
        if(this.props.isGoBack){
          img = <TouchableHighlight onPress={() => this.goBack()}><Image style={styles.style_image}   source={require('../images/icon_back_arrow.png')}/></TouchableHighlight>
        }

        var title=this.props.title?this.props.title:"title"

        return(<View style={styles.style_container}>
                <Text style={styles.style_title}>{title}</Text>
                {desc}
          </View>);
      }
}

const styles=StyleSheet.create({

    style_container: {
      flexDirection: 'column',
      backgroundColor: '#BFBFBF'
    },

    style_title: {
      fontSize: 18,
      backgroundColor: '#BFBFBF',
      margin: 10
    },
    style_description: {
      fontSize: 12,
      marginLeft: 10,
      marginBottom: 10
    },
    style_image: {
      justifyContent: 'center'
    }


})
