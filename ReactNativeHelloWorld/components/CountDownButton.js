import React,{Component} from 'react';
import {View,StyleSheet,TouchableWithoutFeedback,Text,TouchableOpacity} from 'react-native';


//has propblems
export default class CountDownButton extends Component{

    constructor(props){
      super(props);
      this.state={
        restNumber: 60,
        isEnable: true,
      }
    }


    showText = () => {
        var txt;
        if(this.state.restNumber==60||this.state.restNumber<0){
          txt = '获取验证码';
          this.setState({
            isEnable: true
          })
          // if(typeof id!=='undefined'){
          //   clearInterval(id);
          // }
        }else{
          txt = this.state.restNumber.toString();
          this.setState({
            isEnable: false
          })
        }
      return(<Text style={styles.style_text}>{txt}</Text>)
    }


      start = () => {
         id = setInterval(()=>{
           if(typeof this.state.restNumber !== 'undefined'){
             var number = this.state.restNumber;
             console.log(">>>>>>>current number: "+number);
             if(number<0){
               if(typeof id!=='undefined'){
                 clearInterval(id);
               }
             }
               this.setState({
                 restNumber: number-1
               })
           }else{
             console.log(">>>>undefined");
           }
         },1000);
      }


      // countDown = () => {
      //   if(typeof this.state.restNumber !== 'undefined'){
      //     var number = this.state.restNumber;
      //     console.log(">>>>>>>current number: "+number);
      //     if(number<0){
      //       if(typeof id!=='undefined'){
      //         clearInterval(id);
      //       }
      //     }
      //       this.setState({
      //         restNumber: number-1
      //       })
      //   }else{
      //     console.log(">>>>undefined");
      //   }
      //
      // }


    render(){
      return(<View style={styles.style_container}>
              <TouchableOpacity onPress={()=>this.start()}
                disabled ={this.state.isEnable}>
                  {this.showText()}
              </TouchableOpacity>
            </View>);
    }
}

const styles = StyleSheet.create({

      style_container: {
        height: 30,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#eee',
        borderRadius: 3,
        borderWidth: 1,
      },
      style_text: {
        fontSize: 13,
        color: '#277CB5',
      }

})
