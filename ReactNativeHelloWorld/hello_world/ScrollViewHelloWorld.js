import React,{Component} from 'react';
import {View,StyleSheet,ScrollView,Text,TouchableOpacity} from 'react-native';

var datas=["论坛成果","新闻速递","中阿合作","影视制作","饮食文化","地域风情"];


export default class ScrollViewHelloWorld extends Component{

        render(){
          return(<ScrollView style={styles.style_container}
            horizontal={true}>
              {datas.map(itemView)}
            </ScrollView>);
        }
}

   var itemView = (title,i) => {
     return(
       <TabView title={title}
                number={i}/>
     );
   }


class TabView extends Component{


propsType: {
  title: propsType.string,
}


      render(){
        return(
          <View>
             <TouchableOpacity >
                <Text style={styles.style_selected_text}>{this.props.title}</Text>
             </TouchableOpacity>
          </View>
        );
      }
}


const styles = StyleSheet.create({

    style_container: {
      flex: 1,
      height: 50,
    },
    style_selected_text: {
      flex: 1,
      fontSize:20,
      color: '#277CB5',
      margin: 10
    },
    style_normal_text: {
      flex: 1,
      fontSize:20,
      color: '#959595',
      margin: 10
    }
})
