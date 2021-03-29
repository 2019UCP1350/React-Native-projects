import CreateDataContext from "./CreateDataContext";
import trackerapi from "../api/tracker"
import {AsyncStorage } from "react-native";
import {navigate} from "../navigationRef";
const AuthReducer=(state,action)=>
{
	switch(action.type)
	{
		case "add_error":
			return {...state,errorMessage:action.payload}
		case "signup":
			return {errorMessage:'',token:action.payload}
		case "signout":
			return {errorMessage:'',token:null}
		default:
			return state;
	}
};

const signin=(dispatch)=>{
	return async ({email,password})=>{
		try{
			const response=await trackerapi.post("/signin",{email,password});
			await AsyncStorage.setItem('token',response.data.token);
			dispatch({type:"signup",payload:response.data.token});
			navigate('mainFlow');
		}catch(err)
		{
			dispatch({type:"add_error",payload:"Something went wrong with Sign In"});
		}
		// make an api request to signin
		// if sucess change our state and navigate to some other page
		// else print some error
	};
};

const signup=(dispatch)=>{
	return  async ({email,password})=>{
		try{
			const response=await trackerapi.post("/signup",{email,password});
			await AsyncStorage.setItem('token',response.data.token);
			dispatch({type:"signup",payload:response.data.token});
			navigate('mainFlow');
		}catch(err)
		{
			console.log(err.message);
			dispatch({type:"add_error",payload:"Something went wrong with Sign Up "});
		}
		// make an api request to add new userAgent
		// if sucess change our state and navigate 
	};	// else print some error message message
};

const error=(dispatch)=>{
	return (err)=>{ dispatch({type:"add_error",payload:err})};
}

const tryLocalLogin=(dispatch)=>{
	return async ()=>{
		const token=await AsyncStorage.getItem("token");
		if (token){
			dispatch({type:"signup",payload:token});
			navigate("TrackList");
		}
		else{
			navigate("Signup");
		}
	};
}


const signout=(dispatch)=> async()=>{
	await AsyncStorage.removeItem("token");
	dispatch({type:"signout"});
	navigate("loginFlow");
};

export const {Context,Provider}=CreateDataContext(AuthReducer,{signup,signin,signout,error,tryLocalLogin},{token:null,errorMessage:''});