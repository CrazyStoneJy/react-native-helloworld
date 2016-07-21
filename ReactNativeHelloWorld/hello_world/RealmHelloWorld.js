import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
// import Realm from 'realm';
import TestModel from './TestModel';
const Realm = require('realm');

export default class RealmHelloWorld extends Component{



  createData = () => {
    this.realm.write(()=>{
      this.realm.create('person',{id:　1,name:　'jiayan',age: '24',address: 'shanxi',phone: '13753251234'});
      this.setState({
        datas:　this.realm.objects('person'),
      })
    });
  }

  changeData = () => {
    this.relam.write(()=>{
      this.realm.create('person',{id: 1,age: '35'},true);
      this.setState({
        datas:　this.realm.objects('person'),
      })
    })
  }

  deleteData = () => {
    this.relam.write(()=>{
      var perons = this.relam.objects('person');
      //过滤ID=1的person
      var person = perons.filtered('id=1');
      if(person!==null){
        this.relam.delete(person);
        this.setState({
          datas:　this.realm.objects('person'),
        })
      }
    })
  }

  constructor(){
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});
     realm  = new Realm({schema: TestModel.schema});
    this.state={
      datas: [],
      dataSource: ds.cloneWithRows(datas),
    }
  }

  save = () =>{
    this.create();

  }

    render(){
      return(<View style={{flex: 1}}>
                <TouchableOpacity onPress={()=>this.createData()}>
                  <Text style={styles.style_font}>新建数据</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.changeData()}>
                  <Text style={styles.style_font}>更改数据</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.deleteData()}>
                  <Text style={styles.style_font}>删除数据</Text>
                </TouchableOpacity>
                <ListView dataSource={this.dataSource}
                          renderRow={this.getRenderRow}/>
            </View>);
    }


    getRenderRow = (rowData,sectoinId,rowId) => {
        return(<View style={{heigh: 50}}>
                  <Text style={{fontSize: 15,color: 'black'}}>{JSON.stringify(rowData)}</Text>
                </View>)
    }

}

const styles = StyleSheet.create({
  style_font: {
    fontSize: 15,
    color: 'black',
  }
})
