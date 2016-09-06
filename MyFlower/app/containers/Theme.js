/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React from 'react';
import{
    StyleSheet,
    Image,
    TouchableOpacity,
    ListView,
    Text,
    View,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import Detail from './Test';

var totalList = new Array();
var currentPage = 1;

class  Theme extends React.Component{
  // 构造
  constructor(props) {
      super(props);
      // 初始状态
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      console.log('初始化');
      this.state = {
        isLoading:false,
        isRefreshing:false,
        isMore:false,
        dataSource: ds.cloneWithRows(['row'])
      };
    }

  //控件加载完毕后调用
  componentDidMount() {
    console.log('控件加载完毕后调用');
    this.fetchData(false,false,'1')
  };

  //请求的URL的拼接
  _getListUrl(currentPageIndex,pageSize,cateId){
    var data = {
      action:'mainList',
      currentPageIndex:currentPageIndex,
      pageSize:pageSize,
      cateId:cateId?cateId:''
    };
    var queryString = Object.keys(data)
      .map(key => key+'='+encodeURIComponent(data[key]))
      .join('&');
    return 'http://m.htxq.net/servlet/SysArticleServlet?'+queryString
  };

  //获取数据
  fetchData(isRefreshing,isMore,currentPageIndex) {
    var url = this._getListUrl(currentPageIndex,'5','8dba5958-7da0-4ce9-b1e9-5b92343519a7');
    console.log(url);

    this.setState({
      isLoading:true,
      isRefreshing:isRefreshing,
      isMore:isMore
    });

    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log('请求失败');
        if (currentPage==1) {
          dataSource=[];
        }else{
          dataSource=[];
          currentPage--;
        }
        this.setState({
          dataSource:[],
          isRefreshing:false,
          isLoading:false,
          isMore:false
        });
      })
      .then((responseData) => {
        let list = responseData.result;
        if (this.state.isRefreshing) {
          // totalList.splice(0,totalList.length);//清空数组
          totalList = [];
        }
        for(var i=0; i<list.length; i++){
          totalList.push( list[i] );
        }
        this.setState({
          isLoading:false,
          isRefreshing:false,
          isMore:false,
          dataSource:this.state.dataSource.cloneWithRows(totalList)
        });
        console.log('response',responseData)
      }) 
      .done();
  };

  //下拉刷新
  onRefresh(){
    console.log('刷新开始');
    currentPage=1;
    this.fetchData(true,false,currentPage)
  };

  onEndReached(){
    console.log('上拉加载更多');
    currentPage++;
    this.fetchData(false,true,currentPage)
  };

  _renderFooter(){
    return(
      <View style={{ flex:1, height:40, flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size='small'>
        </ActivityIndicator>
        <Text>
          更多数据加载中...
        </Text>
      </View>
    )
  };

  _clickContentItem(result){
      console.log('点击cell');
      this.props.navigator.push({ 
          title:'Detail', 
          component:Detail, 
          passProps:''
       })
  };

  //渲染Cell
  _renderRow(result) {
    var author = result.author?result.author:'';
    var category = result.category?result.category:'';
    console.log('rowContainer',result);
    return(
        <TouchableOpacity onPress={this._clickContentItem.bind(this)}>
          <View style={ styles.contentItem }>
          <View style={ styles.containerItem }>
          <Image
            style={{ height: 160 }}
            source={{ uri: result.smallIcon }}>
          </Image>

          <View style={{ flex:1, flexDirection:'row', justifyContent:'flex-end' }}>
            <View style={{ flex:1, marginRight:8, alignItems:'flex-end' }}>
              <Text style={{ fontSize:14, marginTop:8 }}>
                { author.userName?author.userName:'佚名' }
              </Text>
              <Text style={{ flex:1, fontSize:12, marginTop:5 }}>
                { author.identity?author.identity:'' }
              </Text>
            </View>
            <Image
              style={{ width:51, height:51, marginTop:-10, marginRight:-14, borderColor:'#f1f1f1', borderRadius:25.5, borderWidth:1 }}
              source={{ uri: author.headImg }}>
            </Image>
            <Image
              style={{ width:14, height:14, marginTop:25, marginRight:10, borderColor:'#f1f1f1', borderRadius:7, borderWidth:1 }}
              source={{ uri: result.smallIcon }}>
            </Image>
          </View>

          <Text style={{ fontSize:14, color:'#c7a762',marginLeft:10 }}>
            [{category.name?category.name:''}]
          </Text>
          <Text style={{ fontSize:14, marginTop:10, marginLeft:10 }}>
            {result.title}
          </Text>
          <Text style={{ fontSize:12, marginTop:5, marginLeft:10, marginRight:10 }}
                numberOfLines={2}>
            {result.desc}
          </Text>
          <View style={{ height:2, marginTop:5, marginLeft:10, marginRight:10, backgroundColor:'#eeeeee' }}>
          </View>

          <View style = {{ marginTop:10, marginBottom:10, flexDirection:'row', justifyContent:'flex-end' }}>
            <View>
              <View style={{ flexDirection:'row', justifyContent:'flex-end' }}>
                <Image
                  style={{ marginRight:10, width:15, height:15 }}
                  source={ require('image!count') }>
                </Image>
                <Text style={{ marginRight:10 }}>
                  {result.read?result.read:0}
                </Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection:'row', justifyContent:'flex-end' }}>
                <Image
                  style={{ marginRight:10, width:15, height:15 }}
                  source={ require('image!praise') }>
                </Image>
                <Text style={{ marginRight:10 }}>
                  {result.favo?result.favo:0}
                </Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection:'row', justifyContent:'flex-end' }}>
                <Image
                  style={{ marginRight:10, width:15, height:15 }}
                  source={ require('image!comment') }>
                </Image>
                <Text style={{ marginRight:10 }}>
                  {result.fnCommentNum?result.fnCommentNum:0}
                </Text>
              </View>
            </View>
          </View>

        </View>
          </View>
        </TouchableOpacity>
    )
  };

  render() {
    if (this.state.animating && !this.state.isRefreshing) {
      return (
        <View style={{ flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
          <ActivityIndicator size='large'>
          </ActivityIndicator>
          <Text>
            数据加载中...
          </Text>
        </View>
      )
    }

    return (
      <ListView style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        showsVerticalScrollIndicator = {false}
        onEndReached={() => this.onEndReached()}
        onEndReachedThreshold={0}
        renderFooter={this._renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
            title="Loading..."
            progressBackgroundColor="#ffff00">
          </RefreshControl>
        }>
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  listView:{
      marginTop:64,
      backgroundColor:'#f1f1f1'
  },
  contentItem:{
      backgroundColor:'#f1f1f1',
      padding:10
  },
  containerItem:{
      backgroundColor:'#ffffff'
  } 
});

export default Theme;