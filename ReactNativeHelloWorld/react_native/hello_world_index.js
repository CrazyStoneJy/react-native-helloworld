import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,ListView,ScrollView,ToastAndroid} from 'react-native';
import Swiper from 'react-native-swiper';
import UITitle from '../hello_world/UITitle';


export default class HelloWorld extends Component{

      constructor(){
          super();
          var ds=new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2});

          var datas = [
            {
              title: "酒店",
              style: {
                backgroundColor: '#F19C3B',
                margin: 10,
                borderRadius: 8,
              },
              datas: [
                  {content1: "海外"},
                  {content2: "团购.特惠"},
                  {content3: "周边"},
                  {content4: "客栈.公寓"},
              ]
            },
            {
              title: "机票",
              style: {
                backgroundColor: '#499EFB',
                margin: 10,
                borderRadius: 8,
              },
              datas: [
                  {content1: "火车票"},
                  {content2: "汽车票"},
                  {content3: "接收机"},
                  {content4: "自驾.专车"},
              ]
            },
            {
              title: "旅游",
              style: {
                backgroundColor: '#EB787E',
                margin: 10,
                  borderRadius: 8,
              },
              datas: [
                  {content1: "门票.玩乐"},
                  {content2: "游轮"},
                  {content3: "处境WIFI"},
                  {content4: "签证"},
              ]
            },
            {
              title: "攻略",
              style: {
                backgroundColor: '#78B413',
                margin: 10,
                borderRadius: 8,
              },
              datas: [
                  {content1: "周末游"},
                  {content2: "美食.周末"},
                  {content3: "礼品卡"},
                  {content4: "更多"},
              ]
            }
          ];

          this.state={
            dataSource: ds.cloneWithRows(datas)
          }
      }


      showListView = (rowData, sectionId, rowId) => {
        console.log('>>>>title:'+rowData.title+",content:"+rowData.datas[0].content1);
        return (
          <View style={[{flexDirection: 'row'},rowData.style]}>
                <View style={{flex: 1,flexDirection: 'column'}}>
                  <Text style={styles.black_font_center_style} onPress={()=>this.click2toast(rowData.title)}>{rowData.title}</Text>
                  <Image style={styles.item_img_style} source={{uri: imgs[rowId]}}></Image>
                </View>
                <View style={{flex :1,flexDirection: 'column'}}>
                  <Text style={[styles.black_font_center_style,styles.item_text_border_style]} onPress={()=>this.click2toast(rowData.datas[0].content1)}>{rowData.datas[0].content1}</Text>
                  <Text style={[styles.black_font_center_style,styles.item_text_border_style]} onPress={()=>this.click2toast(rowData.datas[1].content2)}>{rowData.datas[1].content2}</Text>
                </View>
                <View style={{flex :1,flexDirection: 'column'}}>
                  <Text style={[styles.black_font_center_style,styles.item_text_border_style]} onPress={()=>this.click2toast(rowData.datas[2].content3)}>{rowData.datas[2].content3}</Text>
                  <Text style={[styles.black_font_center_style,styles.item_text_border_style]} onPress={()=>this.click2toast(rowData.datas[3].content4)}>{rowData.datas[3].content4}</Text>
                </View>
            </View>
          );
      }


click2toast = (msg) => {
  ToastAndroid.show(msg,ToastAndroid.SHORT);
}




//获取Swiper的image
 getSwipeImgs = () => {
  return (
    slideImgs.map((obj) => {
      console.log(obj);
      return (<Image style={styles.slide} source={{uri: obj}}/>)
    })
  )
}

// <Image style={{height: 80,width: 300,resizeMode: Image.resizeMode.stretch}} source={{uri: "http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png"}} />
// <Image style={{height: 80,width: 300,resizeMode: Image.resizeMode.stretch}} source={{uri: "http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png"}} />
// <Image style={{height: 80,width: 300,resizeMode: Image.resizeMode.stretch}} source={{uri: "http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png"}} />
// <Swiper
//       style={{height: 100}}
//       showsButtons={true}
//       // loop={true}
//       // index={1}
//       showsPagination={true}>
//       <View>
//         <Text>hasbchas</Text>
//       </View>
//       <View>
//         <Text>hehehehda</Text>
//       </View>
//       <View>
//         <Text>xcccccsaca</Text>
//       </View>
//   </Swiper>

//获取Swiper对象
getSwiper = () => {
  return(
      <View style={{height: 90,alignItems: 'center',flexDirection: 'column'}}>
        <Swiper
          style={{height: 80}}
          showsButtons={false}
          autoplay={true}
          loop={true}
       // index={1}
          showsPagination={false}>
          <Image style={{height: 80,resizeMode: Image.resizeMode.stretch}} source={{uri: slideImgs[0]}} />
          <Image style={{height: 80,resizeMode: Image.resizeMode.stretch}} source={{uri: slideImgs[1]}} />
          <Image style={{height: 80,resizeMode: Image.resizeMode.stretch}} source={{uri: slideImgs[2]}} />
        </Swiper>
    </View>
  );

}



   getFooterView = () => {
        return(<View style={[{flex: 1,flexDirection: 'row'},styles.style_footer_border]}>
                  <View style={{flex: 1,flexDirection: 'column'}}>
                    <Text style={styles.black_font_center_style}>特卖会</Text>
                    <Text style={styles.gray_font_style}>及时抢购，超值预售</Text>
                  </View>
                  <View style={{backgroundColor: '#000',width: 1}}/>
                  <View style={{flex: 1,flexDirection: 'column'}}>
                    <Text style={styles.black_font_center_style}>热门活动</Text>
                    <Text style={styles.gray_font_style}>天天有礼，惊喜不同</Text>
                  </View>
                </View>);
   }


  render(){
    // <UITitle style={styles.black_font_center_style}
    // title="首页"/>
      return(
          <View style={{flex: 1,flexDirection: 'column'}}>
              {this.getSwiper()}
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.showListView}
              renderFooter={this.getFooterView}
            />
          </View>
      );
    }

}

var slideImgs=[
  "http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png",
   "http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png",
   "http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg"
 ];

var imgs=[
 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

const styles = StyleSheet.create({
  black_font_center_style: {
    fontSize: 20,
    margin: 10,
    color: '#000000',
    textAlign: 'center'
    // alignItems: 'center'
  },
  white_font_center_style: {
    fontSize: 18,
    margin: 10,
    color: '#ffffff',
    textAlign: 'center'
    // alignItems: 'center'
  },
  gray_font_style: {
    fontSize: 15,
    color: '#DCDCDC',
    textAlign: 'center',
    marginBottom: 20
  },
  wrapper: {
    height: 100,
    backgroundColor: 'red',
  },
  slide: {
    height: 80,
    resizeMode: Image.resizeMode.cover,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'transparent'
  },
  item_img_style: {
    height: 50,
    alignItems: 'center',
    resizeMode: Image.resizeMode.contain
  },
  item_text_border_style: {
    borderWidth: 1,
    borderColor: '#fff'
  },
  listview_border_style:{
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  style_border: {
    height: 80,
    width: 200,
    backgroundColor: 'red'
  },
  style_footer_border:{
    borderColor: '#000',
    borderWidth: 1,
    margin: 10
  }

}
)
