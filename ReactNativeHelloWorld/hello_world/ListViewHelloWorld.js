import React, {Component} from 'react';
import {View,StyleSheet,ListView,Text,RecyclerViewBackedScrollView,TouchableHighlight,ToastAndroid,TouchableOpacity} from 'react-native';

export default class ListViewHelloWorld extends Component{

  ds;
  datas
    constructor(){
      super();
    }


    componentWillMount() {
      ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2,
                                        sectionHeaderHasChanged: (s1,s2) => s1!==s2,
                                        getSectionData: this.getSectionData,
                                        getRowData: this.getRowData});


                                        datas =[
                                          {
                                            s:"s1",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s1r1"
                                              },
                                              {
                                                r: "s1r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s2",
                                              isExpanable: false,
                                            r:[
                                              {
                                                r: "s2r1"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s3",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s3r1"
                                              },
                                              {
                                                r: "s3r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s2",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s2r1"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s3",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s3r1"
                                              },
                                              {
                                                r: "s3r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s2",
                                              isExpanable: true,
                                            r:[
                                              {
                                                r: "s2r1"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s3",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s3r1"
                                              },
                                              {
                                                r: "s3r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s2",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s2r1"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              },
                                              {
                                                r: "s2r2"
                                              }
                                            ]
                                          },
                                          {
                                            s:"s3",
                                            isExpanable: true,
                                            r:[
                                              {
                                                r: "s3r1"
                                              },
                                              {
                                                r: "s3r2"
                                              }
                                            ]
                                          }
                                        ];


      this.state={
        dataSource: ds.cloneWithRowsAndSections(datas,this.getSctionIDs(datas),this.getRowIDs(datas))
      }
    }

        updateData = (datas) => {
          this.state={
            dataSource: ds.cloneWithRowsAndSections(datas,this.getSctionIDs(datas),this.getRowIDs(datas))
          }
        }



    getSctionIDs = (data) => {
      var sectionIDs = [];
      for (var i = 0; i < data.length; i++) {
        sectionIDs.push(i);
      }
      return sectionIDs;
    }

    getRowIDs = (datas) => {
      var rowsIds = [];
      for (var i = 0; i < datas.length; i++) {
        var rowIds = [];
        if(datas[i].isExpanable){
          for (var j = 0; j < datas[i].r.length; j++) {
            rowIds.push(j);
          }
        }
        rowsIds.push(rowIds);
      }
      return rowsIds;
    }

    getSectionData = (data,sectionId) => {

      return data[sectionId];
    }

    getRowData = (data,sectionId,rowId) => {

      return data[sectionId].r[rowId];
    }

    render(){
      return(
        // renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        <View style={{flex:1, backgroundColor: 'white'}}>
          <ListView style={{flex:1}}
          enableEmptySections={true}
           dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSection}
          renderFooter={this._renderFooter}/>
        </View>
      );
    }


      _renderSection = (sectionData,sectionId) => {
        // console.log("sectionData:"+sectionData[0]+",sectionId:"+sectionId+",data:"+sectionData);
        return (
          <View style={{height: 60,backgroundColor: '#F0F0F0'}}>
              <Text style={{fontSize: 45,color: '#282C34'}} onPress={()=>this._toggleSection(sectionId)}>{sectionData.s}</Text>
          </View>
        );
      }


          _toggleSection = (sectionId) => {
            datas[sectionId].isExpanable = !datas[sectionId].isExpanable;
            this.setState({
              dataSource: ds.cloneWithRowsAndSections(datas,this.getSctionIDs(datas),this.getRowIDs(datas))
            });

            // sectionData.isExpanable=(!sectionData.isExpanable);
            // this.updateData();
          }



        _renderFooter = () => {
            return (
              <View style={{backgroundColor: 'green',height: 80}}>
              </View>
            )
        }


          _toastRow = (rowData,sectionId,rowId) => {
              ToastAndroid.show(rowData.r,ToastAndroid.SHORT);
          }


      _renderRow = (rowData,sectionId,rowId) => {
        return(
          <View >

            <Text style={{flex :1,fontSize: 35,flexDirection: 'row',color: '#226699'}}>{rowData.r}</Text>

          </View>
        )
      }

}
