import React,{useContext,useEffect} from "react";
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from "react-native";
import { Context as BlogContext} from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const IndexScreen=({navigation})=>{
	const obj=useContext(BlogContext); //useEffect is react native hook which is used get the value passes to blog context;
	
	useEffect(()=>{
			obj.GetBlogPost();
			/*  const listner=navigation.addListener('didFocus',()=>{ obj.GetBlogPost()});
				return ()=>{
				listener.remove();}
				it is the code to add a event handler to render a screen again
			*/
			}
			,[]);
	return (
		<View>
			<Text style={styles.conditional}>{obj.blogpost.length==0 ? "No Blog Post Yet!!":null}</Text>
			<FlatList
				data={ obj.blogpost }
				keyExtractor={(BlogPost)=> (BlogPost.id).toString()}
				renderItem={
					({ item })=>{ 
						return(
							<TouchableOpacity onPress={()=>{ navigation.navigate('Show',{ id: item.id})}}>
								<View style={styles.row}>
									<Text style={styles.title}> {item.title}</Text>
									<TouchableOpacity onPress={()=>{obj.DeleteBlogPost(item.id)}}  >
										<FontAwesome name="trash-o" style={styles.icon} />
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						);
					}
				}
			/>
		</View>
	);
};

IndexScreen.navigationOptions=({navigation})=>{
	return {                          //returns an object
		headerRight:()=>{
			return 	<TouchableOpacity onPress={()=>{ navigation.navigate("Create");}} >
					<Entypo name="plus" size={30} style={{paddingRight:15}} />
				</TouchableOpacity>
		}
	}
}
const styles=StyleSheet.create({
	row:{
		flexDirection:"row",
		justifyContent:"space-between",
		marginTop:10,
		paddingTop:7,
		marginHorizontal:10,
		borderTopWidth:2,
		borderColor:'gray',
	},
	title:{
		fontSize:20,
		marginLeft:10,
	},
	icon:{
		fontSize:24,
		marginRight:15,
	},
	conditional:{
		margin:5,
		color:'blue',
		fontSize:20,
		textAlign:'center'
	}
});

export default IndexScreen;