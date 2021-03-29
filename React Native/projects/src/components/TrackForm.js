import React,{useContext} from "react";
import {Button,Input} from "react-native-elements";
import {View} from "react-native";
import Spacer from "./spacer";
import {Context as LocationContext } from "../context/LocationContext";

const TrackForm=()=>{
    const { state:{name,recording,locations},startrecording,stoprecording,changename}=useContext(LocationContext);
    console.log(locations.length);
    return <View>
        <Spacer>
        <Input placeholder="Enter name" value={name} onChangeText={(newtext)=>changename(newtext)}/>
        {recording ? <Button title="Stop Recording" onPress={stoprecording}/>:<Button title="Start Recording" onPress={startrecording}/>}
        </Spacer> 
    </View>
}
export default TrackForm;