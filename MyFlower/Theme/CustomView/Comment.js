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
	AppRegistry,
	Image,
	Text,
	View,
	TouchableHighlight,
	StyleSheet,
} = MyReact;

  var Comment = React.createClass({
	render(){
		return (
			<View style = {styles.container}>
				<TouchableHighlight>
					<View>
						<Image
							style={{ width:15, height:15,marginTop:100 }}
							source={ require('image!count') }>
						</Image>
						<Text>
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);		
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#ffffff',
		flexDirection:'row', 
		justifyContent:'flex-end'		
	}
});

module.exports = Comment;