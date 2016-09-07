/**
 * Created by victoria on 16/9/6.
 */

// NavigationBarStyle 导航条的样式
// create by 小广

'use strict';
import {
    StyleSheet,
} from 'react-native';

export default  StyleSheet.create({
    // navBar
    nav_barView:{
        justifyContent: 'center',
    },
    nav_bar: {
        //flex:1,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
    },

    // 标题纯title
    nav_title: {
        fontSize:17,
    },

    // titleView
    nav_titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    nav_ItemView:{
        width:80,
        justifyContent: 'center',
    },

    // 左Item
    nav_leftItem: {
        marginLeft:8,
        flex:1,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        //backgroundColor:'#f00',
    },

    // 左Item为title
    nav_leftTitle: {
        marginRight:5,
        marginLeft:5,
        fontSize: 14,
    },

    // 左图片
    nav_leftImage: {
        margin:10,
        resizeMode:'contain',
    },

    // 右Item
    nav_rightItem: {
        marginRight:8,
        flex:1,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        //backgroundColor:'#3393F2',
    },

    // 右Item为title
    nav_rightTitle: {
        marginRight:5,
        marginLeft:5,
        fontSize: 14,
    },

    // 右图片
    nav_rightImage:{
        margin:10,
        resizeMode:'contain',
        //backgroundColor:'#f00',
    },
    //resizeMode:'contain',
});