/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react')
var MyReact = require('react-native')
var Theme = require('./Theme/Pages/Theme')
var JZMenuCard = require('./Theme/Pages/JZMenuCard')
var Comment = require('./Theme/CustomView/Comment')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = MyReact;

var MyFlower = React.createClass ({

  //初始化函数
  getInitialState() {
    return {
      selectedTab: 'zt'
    }
  },

  //设置选中的Tab Bar Item
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },

  render:function() {
    return (
      <TabBarIOS 
      style={{flex:1,alignItems:"flex-end"}}
      tintColor='#000000'>

      {this._createTabBarItem('专题',require('image!tb_0'),require('image!tb_0_s'),'zt',Theme)}
      {this._createTabBarItem('社区',require('image!tb_1'),require('image!tb_1_s'),'sq',Comment)}
      {this._createTabBarItem('商城',require('image!tb_2'),require('image!tb_2_s'),'sc',Theme)}
      {this._createTabBarItem('我的',require('image!tb_3'),require('image!tb_3_s'),'wd',JZMenuCard)} 

      </TabBarIOS>
    );
  },

  // 创建TabBarIOS.Item  
  _createTabBarItem(title,icon,selectedIcon,selectedTab,selectedVC){
    return (
      <TabBarIOS.Item
        title = {title}
        icon = {icon}
        selectedIcon = {selectedIcon}
        renderAsOriginal = { true } //使selectedIcon生效，否则选中图标会染上蓝色
        onPress={ () => this.changeTab(selectedTab) }
        selected={ this.state.selectedTab === selectedTab }>
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title:title,
            component:selectedVC
          }}>
        </NavigatorIOS>
      </TabBarIOS.Item>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor: '#000fff',
    flex:1
  }
});

AppRegistry.registerComponent('MyFlower', function() { return MyFlower });
