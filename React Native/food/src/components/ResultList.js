import React from "react";
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import {withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail"
const ResultList=({title,results,navigation})=>{
	if (!results.length)
	{
		return null;
	}
	return (
		<View>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList 
				data={results}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(result)=>{result.id}}
				renderItem={({item})=>{
				return (
					<TouchableOpacity onPress={()=>{navigation.navigate('Detail',{id:item.id})}} >
						<ResultDetail details={item} />
					</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles=StyleSheet.create({
	titleStyle:{
		fontSize:22,
		fontWeight:'bold',
		paddingLeft:10
	}
});

export default withNavigation(ResultList);