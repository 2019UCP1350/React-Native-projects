import React,{useState,useEffect} from "react";
import {View,StyleSheet,Text,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import UseResults from "../hooks/UseResults";
import ResultList from "../components/ResultList"
const SearchScreen=()=>{
	const [term,setTerm]=useState('');
	const [searchApi,results,errorMessage]=UseResults();
	const costfilter=(cost)=> {return results.filter((results)=>{ return results.price===cost})};
	// we can also use thing <View style={{flex:1}}> as we as <>
	return(
		<> 
			<SearchBar 
				term={term} 
				onTermChange={setTerm}
				onTermSubmit={()=>{searchApi(term)}}
			/>
			{ errorMessage.length==0 ? null:<Text>{errorMessage}</Text>}
			<ScrollView>
				<ResultList title="Cost Effective" results={costfilter('$')} />
				<ResultList title="Bit Pricer"  results={costfilter('$$')} />
				<ResultList title="Bit Spender"  results={[...costfilter('$$$'),...costfilter('$$$$')]} />
			</ScrollView>
		</> 
	);
};
export default SearchScreen;