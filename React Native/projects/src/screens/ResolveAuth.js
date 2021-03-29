import React,{useContext,useEffect} from "react";
import {Context as AuthContext} from "../context/AuthContext";

const ResolveAuth=()=>{
	const {tryLocalLogin}=useContext(AuthContext);
	useEffect(()=>{tryLocalLogin()},[]);
	return null;
};

export default ResolveAuth;