import React from "react";
import {View,StyleSheet,Text,TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar=({term,onTermChange,onTermSubmit})=>{
	return(
		<View style={styles.SearchBackStyle}>
			<Feather name="search" style={styles.icon} />
			<TextInput 
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search' 
				style={styles.Search}
				value={term} 
				onChangeText={(newvalue)=>{ onTermChange(newvalue)}} //calling a function
				onEndEditing={onTermSubmit} // calling by refference to a function 
			/>
		</View>
	);
};

const styles=StyleSheet.create({
	SearchBackStyle:{
		backgroundColor:'#E8E8E8',
		margin:10,
		borderRadius:10,
		flexDirection:'row',
	},
	Search:{
		fontSize:18,
		marginLeft:5,
		flex:1
	},
	icon:{
		margin:5,
		fontSize:30,
		color:'black'
	}
	
});

export default SearchBar;