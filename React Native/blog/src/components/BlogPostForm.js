import React,{useState} from "react";
import {View,Text,StyleSheet,Button,TextInput} from "react-native";

const BlogPostForm= ({onSubmit,intialvalues,labels})=>{
	const [title,setTitle]=useState(intialvalues.title);
	const [content,setContent]=useState(intialvalues.content);
	
	return <View style={styles.container}>
			<Text style={styles.heading} >{labels.title}</Text>
			<TextInput 
				style={styles.input} 
				value={title} 
				onChangeText={(text)=>{setTitle(text)}} 
			/>
			<Text style={styles.heading} >{labels.content}</Text>
			<TextInput 
				style={styles.input} 
				value={content} 
				onChangeText={(text)=>{setContent(text)}}
			/>
			<Button 
				title={labels.btntitle}
				onPress={()=>{onSubmit(title,content)}}
			/>
		</View>
};

const styles=StyleSheet.create({
	container:{
		margin:5,
		justifyContent:'center'
	},
	heading:{
		fontSize:20,
		margin:5,
		textAlign:'center'
	},
	input:{
		fontSize:18,
		padding:10,
		borderWidth:1,
		marginHorizontal:10,
		marginBottom:5
	}
});

export default BlogPostForm;