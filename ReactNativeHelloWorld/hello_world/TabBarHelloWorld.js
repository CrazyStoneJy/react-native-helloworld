import React,{Component} from 'react';
import {View,StyleSheet,ScrollView,Text,Dimensions,TouchableOpacity} from 'react-native';

const sreenWidth=Dimensions.get('window').width;

export default class TabBarHelloWorld extends Component{

    propTypes: {
      datas: React.propTypes.Array,
      index: React.propTypes.number,
      selectedColor: React.propTypes.string,
      unselectColor: React.propTypes.string,
      chageTab: React.propTypes.func,
    }


      getDefaultProps: {
        index: 0,
      }

      // constructor(){
      //   this.state={
      //     index: this.props.index;
      //   }
      // }


    // _changeTab(selectedIndex) => {
    //
    //     this.setState={
    //       index: selectedIndex;
    //     }
    //
    // }




    _getItemView  = (data,i) => {

        const isSelected = i === this.props.index;
        const textColor = isSelected ? this.props.selectedColor : this.props.unselectColor;
        const textWeight = isSelected ? 'bold' : 'normal';

        // alert("scrren Width: "+sreenWidth+",data:"+data);
        return(<View>
                  <TouchableOpacity onPress={()=>this.props.chageTab(i)}>
                    <Text style={{color: textColor,width: sreenWidth/4,fontWeight: textWeight,fontSize:20,alignItems: 'center',justifyContent: 'center'}}>{data}</Text>
                  </TouchableOpacity>
                </View>)
    }


    render(){
      // alert(this.props.datas);
      return(<ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator ={false}>
                  {this.props.datas.map((data,i) => this._getItemView(data,i))}
             </ScrollView>);
    }
}

const styles = StyleSheet.create({

})
