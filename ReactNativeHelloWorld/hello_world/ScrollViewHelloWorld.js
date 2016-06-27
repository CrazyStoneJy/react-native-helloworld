import React,{ Component } from 'react';
import {View,ScrollView,Text} from 'react-native';

export default class ScrollViewHelloWorld extends Component{


      render(){
        return(
          <View style={{flex: 1,height: 100,flexDirection: 'row'}}>
            <ScrollView style={{backgroundColor: 'red'}}
                        horizontal={true} >
              <Text>hahah</Text>
                <Text>hahah</Text>
                  <Text>hahah</Text>
                    <Text>hahah</Text>
                      <Text>hahah</Text>
                        <Text>hahah</Text>
                          <Text>hahah</Text>
                            <Text>hahah</Text>
                              <Text>hahah</Text>
                                <Text>hahah</Text>
            </ScrollView>
          </View>
        )
      }






}
