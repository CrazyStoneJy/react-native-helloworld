import React,{Component} from 'react';
import {View,DrawerLayoutAndroid,Text,ListView,ToastAndroid,Picker} from 'react-native';
// import Toast from 'react-native-root-toast';

export default class ComponentHelloWorld extends Component{

  constructor(){
    super();
        var ds=new ListView.DataSource({rowHasChanged : (r1,r2) => r1!==r2});
        this.state={
        dataSource: ds.cloneWithRows(['hello1','hello2','hello3','hello4','hello5']),
      };
  }

  renderListView = (rowData,selectionId,rowId) => {
    return(
      <View style={{flex: 1,alignItems: 'center'}}>
        <Text style={{fontSize: 20,color: '#889966',margin: 10,textAlign: 'center'}}
              onPress={()=>this.text2toast()}>{rowData}</Text>
      </View>
    );
  }

    text2toast = ()=>{
      ToastAndroid.show('hehedfa',ToastAndroid.LONG);
    }


    render(){
      var itemView=(
        <View style={{flex: 1,backgroundColor: '#fff',alignItems: 'center'}}>
          <Text style={{fontSize: 25,color: '#ff0000',margin: 10}}>i am hah drawer</Text>
        </View>
      )

      var drawerView=(
        <ListView
        style={{flex: 1}}
        dataSource={this.state.dataSource}
        renderRow={this.renderListView}/>
      );

    return(<DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={()=>drawerView}>
              <View style={{flex: 1,alignItems: 'center'}}>
                <Text style={{margin: 10,fontSize: 30}}
                onPress={()=>this.showPickView }>Hello</Text>
                <Text style={{margin: 10,fontSize: 30 }}>world</Text>
              </View>
        </DrawerLayoutAndroid>);

}

        //fixme has preblems
        // showPickView = ()=>{
        //   return(<View>
        //           <Picker
        //           selectedValue={this.state.language}
        //           onValueChange={(lang) => this.setState({language: lang})>
        //             <Picker.Item label="java" value="java" />
        //       // <Picker.Item label="JavaScript" value="js" />s
        //           </Picker>
        //         </View>);
        //
        // }




}
