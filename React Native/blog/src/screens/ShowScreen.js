import React,{useContext} from "react";
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext"
import { FontAwesome5 } from '@expo/vector-icons';

const ShowScreen= ({navigation})=>{
	const state =useContext(Context).blogpost ;
	
	const BlogPost=state.find((item)=>{return item.id===navigation.getParam("id")});
	return <View style={ styles.container }>
			<Text style={styles.title}>{BlogPost.title}</Text>
			<Text style={ styles.content}>{BlogPost.content}</Text>
		</View>
};

ShowScreen.navigationOptions=({navigation})=>{
	return {
		headerRight:()=>{
			return	<TouchableOpacity onPress={()=>{navigation.navigate('Edit',{ id: navigation.getParam('id')})}}>
						<FontAwesome5 name="pencil-alt"  style={styles.icon} />
					</TouchableOpacity>
		}
	};
};

const styles=StyleSheet.create({
	title:{
		fontSize:20,
		marginBottom:5,
		fontStyle:'italic',
		textDecorationLine:'underline'
	},
	container:{
		marginTop:20,
		paddingVertical:15,
		paddingHorizontal:10,
		marginHorizontal:10,
		borderWidth:1,
		borderRadius:4
	},
	content:{
		fontSize:18,
	},
	icon:{
		paddingRight:20,
		fontSize:30,
	}
});

export default ShowScreen;