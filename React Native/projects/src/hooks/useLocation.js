import {useState,useEffect} from "react";
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from "expo-location";

export default (shouldTrack,callback)=>{
	const [err,setErr]=useState(null);
	const [trackloc,setTrackloc]=useState(null);		//trackloc wheather we have to track location or not
	const startWatching= async ()=>{
		const a=await requestPermissionsAsync(); 
		if (!a.granted){
			setErr("Please enable location services");
		}else{
			try{
				const sub=await watchPositionAsync({
					accuracy:Accuracy.BestForNavigation,
					timeInteval:1,
					distanceInterval:10
					},callback);
				setTrackloc(sub);
			}catch(e){
				console.log(e.message);
			}
		}
	}
	useEffect(()=>{
			if (shouldTrack){
				startWatching();
			}else{
				trackloc.remove();
				setTrackloc(null);
			}
		},
		[shouldTrack]
	);
	return [err] ;
}