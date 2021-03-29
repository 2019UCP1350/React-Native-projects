import React,{useContext} from "react";
import {StyleSheet,View,ActivityIndicator} from "react-native";
import {Text} from "react-native-elements";
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as LocationContext} from "../context/LocationContext";

const Map=()=>{
	
	const {state:{currentlocation}}=useContext(LocationContext);
	
	if (!currentlocation){
		return <ActivityIndicator size="large" style={{marginTop:200}} />
	}
	/*region={{
				...currentlocation.coords,
				latitudeDelta:0.001,
				longitudeDelta:0.001,
			}}
		this code can be used to to center the position of the map to use currentlocation 
	*/
	return <MapView 
			style={{height:300}} 
			initialRegion={{
					...currentlocation.coords,
					latitudeDelta:0.001,
					longitudeDelta:0.001
				}}
		>
			<Circle 
				center={currentlocation.coords}
				radius={10}
				strokeColor="rgba(158,158,255,1.0)"
				fillColor="rgba(158,158,255,0.5)"
			/>
		</MapView>
}; 

const styles=StyleSheet.create({});

export default Map;