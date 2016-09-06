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
    TouchableHighlight
} from 'react-native';
import Theme from './Theme';
import JZMenuCard from './JZMenuCard';
import Comment from '../CustomView/Comment';
import Test from './Test';

class  TabBarView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'zt'
        };
    }

    //设置选中的Tab Bar Item
    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    };

    render(){
        return(
            <TabBarIOS
                style={{flex:1,alignItems:"flex-end"}}
                tintColor='#000000'>

                {this._createTabBarItem('专题',require('image!tb_0'),require('image!tb_0_s'),'zt',Theme)}
                {this._createTabBarItem('社区',require('image!tb_1'),require('image!tb_1_s'),'sq',Comment)}
                {this._createTabBarItem('商城',require('image!tb_2'),require('image!tb_2_s'),'sc',Test)}
                {this._createTabBarItem('我的',require('image!tb_3'),require('image!tb_3_s'),'wd',JZMenuCard)}

            </TabBarIOS>
        )
    }

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
                {this._renderComponent(this.state.selectedTab)}
            </TabBarIOS.Item>
        )
    };

    // 根据selectedTab 确定模块
    _renderComponent(selectedTab){
        if (selectedTab === 'zt') {
            return <Theme navigator={this.props.navigator} />
        } else if (selectedTab === 'sq') {
            return <Comment navigator={this.props.navigator} />
        } else if (selectedTab === 'sc') {
            return <Test navigator={this.props.navigator} />
        } else if (selectedTab === 'wd') {
            return <JZMenuCard navigator={this.props.navigator} />
        }
    };
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
                initialRoute={{ name:'TabBarView',component:TabBarView }}
                renderScene={(route, navigator) => {
                    let NavSubComponent = route.component;
                    return <NavSubComponent
                        {...route.params}
                        navigator={ navigator }
                    />
                }}
                navigationBar = {
                    <Navigator.NavigationBar style={{ alignItems:'center', justifyContent:'center', marginTop:20, height:44, backgroundColor:'#666666' }}
                        routeMapper = {{
                            LeftButton: (route, navigator, index, navState) =>{
                                if (route.index === 0) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight style={{ backgroundColor:'#192bc7' }} onPress={() => navigator.pop()}>
                                            <Text >Back</Text>
                                        </TouchableHighlight>
                                    );
                                }
                            },
                            RightButton: (route, navigator, index, navState) =>
                                { return (<Text>Done</Text>); },
                            Title: (route, navigator, index, navState) =>
                                { return (<Text>Awesome Nav Bar</Text>); }
                         }}
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000fff',
        flex:1
    }
});

export default App;