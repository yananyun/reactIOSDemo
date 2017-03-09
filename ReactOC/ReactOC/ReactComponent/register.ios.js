'use strict';
let React = require('react-native');
let {
	AppRegistry,StyleSheet,Text,View,TextInput
} = React;

let Dimensions = require(.Dimensions);
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth *  0.1;
let componentWidth = totalWidth * 0.8;
let project19 = React.createClass({
	getInitialState: function() {
		return {
			inputedNum:'',
			inputedPW:'',
		};
	},
	updateNum: function(newText) {
		this.setState((state) => {
			for (var aName in oldState) {
				console.log(aName);
				console.log(oldState[aName]);
				
			}
			return {
				inputedNum: newText,
				aBrandnewStateVariable: 'I am a new variable',
			};
		},this.changeNumDone);
	},
	changeNumDone:function() {
		console.log('React Native has changed inputed Num');
	},
	updatePW: function (newText) {
		this.setState(() => {
			return {
				updatePW: newText,
			};
		});
	},
	render: function () {
		return (

				<View style = {styles.container}>
					<TextInput style={styles.numberInputStyle} 
					placeholder={'请输入手机号吗'}/>
					<Text style ={styles.textPromptStyle}> 您输入的手机号</Text>
					<TextInput style={styles.passwordInputStyle} placeholder={'请输入密码'}
					 password={true}/>
					 <Text style={styles.bigTextPrompt}>
						确定
					 </Text>

				</View>
			);
	},
});

let styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'white',
	},
	numberInputStyle: {
		top: 20,
		left:leftStartPoint,
		width:componentWidth,
		backgroundColor: 'gray',
		fontSize: 20,
	},
	textPromptStyle:{
		top:30,
		left: leftStartPoint,
		width: componentWidth,
		fontSize: 20,
	},
	passwordInputStyle:{
		top: 50,
		left: leftStartPoint,
		width: componentWidth,
		backgroundColor: 'gray',
		fontSize: 20,
	},
	bigTextPrompt{
		top: 70,
		left: leftStartPoint,
		width: componentWidth,
		backgroundColor: 'gray',
		color:'white',
		textAlign:'center',
		fontSize: 60,
	}
});
AppRegistry.registerComponent('Project19', () => Project19);


