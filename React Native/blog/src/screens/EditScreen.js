import React,{useContext} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Context} from "../context/BlogContext"
import BlogPostForm from "../components/BlogPostForm"

const EditScreen= ({navigation})=>{
	const obj=useContext(Context);
	const state=obj.blogpost;
	const EditBlogPost=obj.EditBlogPost;
	const blogpost=state.find((item)=> item.id===navigation.getParam("id"));
	
	return <BlogPostForm 
			onSubmit={(title,content)=>{
						EditBlogPost(blogpost.id,title,content,()=>{navigation.pop()});
					}
				} 
			intialvalues={blogpost} 
			labels={ 
					{	title:"Edit Title", 
						content:"Edit Content" , 
						btntitle:"Save Blog Post"
					}
				}
			/>
};

const styles=StyleSheet.create({
	
});

export default EditScreen;