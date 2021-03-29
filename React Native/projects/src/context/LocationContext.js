import CreateDataContext from "./CreateDataContext";

const LocationReducer=(state,action)=>{
	switch(action.type){
		case "add_current_location":
			return {...state,currentlocation:action.payload};
		case "add_location":
			return {...state,locations:[...state.locations,action.payload]};
		case "start_recording":
			return {...state,recording:true} 
		case "stop_recording":
			return {...state,recording:false}
		case "changename":
			return {...state,name:action.payload};
		default:
			return  state;
	}
};

const addLocation=(dispatch)=>{
	return (location,recording)=>{
		dispatch({type:"add_current_location",payload:location});
		if(recording){
			dispatch({type:"add_location",payload:location});
		}
	}
};

const startrecording=(dispatch)=>{
	return ()=>{dispatch({type:"start_recording"})};
};

const stoprecording=(dispatch)=>{
	return ()=>{dispatch({type:"stop_recording"})};
};

const changename=(dispatch)=>{
	return (name)=>{ dispatch({type:"changename",payload:name})};
}
export const {Context,Provider}=CreateDataContext(LocationReducer,{addLocation,changename,startrecording,stoprecording}
	,{
	locations:[],
	recording:false,
	currentlocation:null,
	name:""
});