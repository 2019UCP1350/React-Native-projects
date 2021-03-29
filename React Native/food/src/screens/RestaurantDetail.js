import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Image,FlatList} from "react-native";
import yelp from "../API/yelp";

const RestaurantDetail=({navigation})=>{
	const id=navigation.getParam('id');
	const [result,setResult]=useState(null);
	const getResult= async (id)=>{
		const response=await yelp.get(`/${id}`);
		setResult(response.data);
	};
	useEffect(()=>{getResult(id)},[]);
	if(!result)
	{
		return null;
	}
	return (
		<View style={styles.container} >
			<Text style={styles.name} >{result.name}</Text>
			<Text style={styles.content1}>Status: {result.is_closed ? "Open":"Closed"} </Text>
			<View>
				<FlatList
					data={result.photos}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(photo)=>{ photo}}
					renderItem={
						({item})=>{
							return (
									<Image  style={styles.image} source={{ uri: item}}/>
							);
						}
					}
				/>
			</View>
			<Text style={styles.content} > Contact Details: {result.phone}</Text>
			<Text style={styles.content} > Location: { result.location.address1},{result.location.city}</Text>
			<Text style={styles.content}> {result.rating} Stars, { result.review_count } Reviews</Text>
		</View>
	);
};

const styles=StyleSheet.create({
	image:{
		height:250,
		width:250,
		marginLeft:10,
		borderRadius:5,
		marginBottom:10
	},
	name:{
		fontSize:24,
		fontWeight:'bold',
		margin:10,
		textAlign:'center'
	},
	container:{
		flex:1,
	},
	content:
	{
		marginLeft:10,
		fontSize:16,
		marginBottom:2
	},
	content1:
	{
		marginLeft:10,
		fontSize:16,
		marginBottom:5,
		color:'red',
		textAlign:'center'
	}
});
export default RestaurantDetail;