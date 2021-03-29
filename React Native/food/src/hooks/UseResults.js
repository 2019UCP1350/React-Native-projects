import {useState,useEffect} from "react";
import yelp from "../API/yelp";

export default ()=>{
	const [results,setResults]=useState([]);
	const [errorMessage,setErrorMessage]=useState('');
	
	const searchApi= async (searchterm)=>{
		try{
			const response = await yelp.get('/search',{
				params:{ 
					limit:50,
					term:searchterm,
					//term, //key is term and the variable of search is term so we use ES2015 syntax we can also use term: term 
					location:"canada"
				}
			});
			setResults(response.data.businesses);
		}catch(err)
		{
			console.log(err);
			setErrorMessage("Something went wrong Try Again Later");
		}
	};
	
	useEffect(()=>{searchApi('')},[]);
	return [searchApi,results,errorMessage];
};