//import "./_mocklocation";
import React,{useContext, useState} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import {Text} from "react-native-elements";
import {SafeAreaView,withNavigationFocus} from "react-navigation";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from"../components/TrackForm";

const TrackCreateScreen=({isFocused})=>{
	const obj=useContext(LocationContext);
	const [err]=useLocation(isFocused,obj.addLocation);
	return <SafeAreaView forceInset={{top:"always"}}>
			<Text h2 style={{textAlign:'center'}}>Create Track</Text>
			<Map/>
			<Text>{err}</Text>
			<TrackForm />
		</SafeAreaView>
};
 
const styles=StyleSheet.create({});
 
export default withNavigationFocus(TrackCreateScreen);