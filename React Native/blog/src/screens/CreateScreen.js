import React,{useContext,useState} from "react";
import {View,Text,StyleSheet,Button,TextInput} from "react-native";
import {Context} from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm"

const CreateScreen= ({navigation})=>{
	const AddBlogPost=useContext(Context).AddBlogPost;
	return <BlogPostForm
			onSubmit={(title,content)=>{
				AddBlogPost(title,content,()=>{navigation.navigate('Index')})
			}}
			labels={ {title:"Enter Title", content:"Write Content" , btntitle:"Add Blog Post"}}
			intialvalues={{title:'',content:''}}
		/>
};

const styles=StyleSheet.create({
	
});

export default CreateScreen;