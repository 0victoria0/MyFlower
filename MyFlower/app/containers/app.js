/**
 * Created by victoria on 16/9/2.
 */

'use strict';

import React from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Navigator,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import Theme from './Theme';
import JZMenuCard from './JZMenuCard';
import Comment from '../CustomView/Comment';
import Test from './Test';
import TabNavigator from 'react-native-tab-navigator';

class TabbarView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'zt',
        };
    }

    render(){
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator >
                    { this._createTabbarItem('专题',require('image!tb_0'),require('image!tb_0_s'),'zt' ) }
                    { this._createTabbarItem('社区',require('image!tb_1'),require('image!tb_1_s'),'sq' ) }
                    { this._createTabbarItem('商城',require('image!tb_2'),require('image!tb_2_s'),'sc' ) }
                    { this._createTabbarItem('我的',require('image!tb_3'),require('image!tb_3_s'),'wd' ) }
                </TabNavigator>
            </View>
        );
    }

    // 创建TabBarIOS.Item
    _createTabbarItem(title,icon,selectedIcon,selectedTab){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title= {title}
                renderIcon={() => <Image source= {icon} />}
                renderSelectedIcon={() => <Image source={selectedIcon} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                { this._renderComponent(this.state.selectedTab) }
            </TabNavigator.Item>
        );
    }

    // 根据selectedTab 确定模块
    _renderComponent(selectedTab){
        if (selectedTab === 'zt') {
            return <Theme navigator={this.props.navigator} />
        } else if (selectedTab === 'sq') {
            return <Test navigator={this.props.navigator} />
        } else if (selectedTab === 'sc') {
            return <JZMenuCard navigator={this.props.navigator} />
        } else if (selectedTab === 'wd') {
            return <Theme navigator={this.props.navigator} />
        }
    }
}

class App extends React.Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <Navigator
                style={{flex:1}}
                initialRoute={{name:'TabbarView',component:TabbarView}}
                renderScene={this._renderNavSubComponent.bind(this)}/>
        )
    }

    // 返回的NavSubComponent
    _renderNavSubComponent(route, navigator){
        var NavSubComponent = route.component;
        if (NavSubComponent) {
            return <NavSubComponent {...route.params} navigator={navigator}/>
        }
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000fff',
        flex:1
    }
});

export default App;