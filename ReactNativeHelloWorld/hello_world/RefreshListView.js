import React,{Component} from 'react';
import {View,StyleSheet,Text,ListView,RefreshControl,InteractionManager,ToastAndroid,ActivityIndicator} from 'react-native';
// import {width,height} from Dimensions.get('window');

var datas=[{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},{
  title: "asdasda",
  content: "sfsdni",
},];
var page = 1;
export default class RefreshListView extends Component{

  ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2});

  constructor(){
    super();
    this.state={
      dataSource: this.ds.cloneWithRows(datas),
      isRefreshing: false,
      isLoadMore: false,
      // page: 1,
    }
  }

  getRenderRow = (rowData,sectionId,rowId) => {
    return(<View style={{height: 100,flexDirection: 'column',alignItems: 'center'}}>
              <Text>{rowData.title}</Text>
              <Text>{rowData.content}</Text>
          </View>)
  }

  // getRefreshControl = () => {
  //   return(<RefreshControl title="Loading..."
  //                         colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']
  //                         onRefresh={onRefresh.bind(this)}
  //                         refreshing={this.state.isRefreshing}/>)
  // }

  onRefresh = () => {
    this.setState({isRefreshing: true});
    InteractionManager.runAfterInteractions(()=>{
        setTimeout(()=>{
          this.setState({isRefreshing: false,
          dataSource: this.ds.cloneWithRows(datas)});
          ToastAndroid.show("数据刷新完毕",ToastAndroid.SHORT);
        },2000);
    });
  }


  // <ActivityIndicator size='small' color='#3e9ce9' />
  _renderFooter = () => {
    if(this.state.isLoadMore){
      return(<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5}}>
      <Text style={{textAlign: 'center', fontSize: 16, marginLeft: 10}}>
      数据加载中……
      </Text>
      </View>);
    }
  }


  _onEndReached = () => {
    this.setState({
      isLoadMore: true,
    })
    page++,
    InteractionManager.runAfterInteractions(()=>{
        setTimeout(()=>{
          var arrays = [];
          for(var i = 0 ; i < datas.length * page ; i++){
            arrays[i] = datas[ i % datas.length];
          }
          this.setState({dataSource: this.ds.cloneWithRows(arrays)});
          ToastAndroid.show("添加数据",ToastAndroid.SHORT);
        },2000);
    });
  }

    render(){
      return(<ListView refreshControl={<RefreshControl title="Loading..."
                        colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
                        onRefresh={this.onRefresh}
                        refreshing={this.state.isRefreshing}/>}
                        dataSource={this.state.dataSource}
                        renderRow={this.getRenderRow}
                        onEndReached ={this._onEndReached.bind(this)}
                        onEndReachedThreshold = {10}
                        initialListSize={1}
                        // onScroll = {ToastAndroid.show("scrolling...",ToastAndroid.SHORT)}
                        renderFooter= {this._renderFooter}
                        />)
    }
}

const styles = StyleSheet.create({

})
