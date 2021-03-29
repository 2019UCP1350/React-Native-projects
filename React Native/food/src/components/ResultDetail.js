import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";

const ResultDetail=({details})=>{
	return(
		<View style={styles.container} >
			<Image style={styles.image} source={{ uri: details.image_url }} />
			<Text style={styles.name} >{details.name}</Text>
			<Text>
				{details.rating} Stars, { details.review_count } Reviews
			</Text>
		</View>
	);
};

const styles=StyleSheet.create({
	image:{
		height:150,
		width:250,
		borderRadius:4,
		marginBottom:5
	},
	name:{
		fontSize:16,
		fontWeight:'bold'
	},
	container:{
		margin:10,
	}
});

export default ResultDetail;