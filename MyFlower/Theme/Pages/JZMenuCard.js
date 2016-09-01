/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 愁眉弯唇皆是为你从此眉间心上再无一人
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TabBarIOS,
// } from 'react-native';

 'use strict'

var MyReact = require('react-native');
var React = require('react');

var {
	Image,
	Text,
	View,
	StyleSheet,
} = MyReact;

  var JZMenuCard = React.createClass({
	render(){
		return (
			<View style = {styles.container}>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
				<Text style = {styles.textBox}>
					我发都是佛撒酒疯撒撒发我发啊水平发
				</Text>
			</View>
		);		
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#000000',
		justifyContent:'center',
		alignItems:'center',
		marginTop:64
	},
	textBox:{
		flex:1,
		backgroundColor:'#000fff',
		justifyContent:'center',
		alignItems:'center',
		padding:10
	}
});

module.exports = JZMenuCard;