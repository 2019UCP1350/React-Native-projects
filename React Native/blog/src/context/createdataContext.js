import React,{ useReducer } from "react";

export default (reducer,actions,intialState)=>{
	
	const Context=React.createContext(); //it is basically a javascript object
	
	const Provider=({ children })=>{
		
		const [state,dispatch]=useReducer(reducer,intialState);
		
		//actions === {AddBlogPost: (dispatch) => return{ ()=>{}}}
		
		const boundActions={};
		for(let key in actions)
		{
				boundActions[key]=actions[key](dispatch);
		}
		
		return <Context.Provider value={ { blogpost:state , ...boundActions } } >
				{ children }
			</Context.Provider>
		//	children are bascillay the the JXS that is wraped inside a 
		//	component and is passed as a props and from props we destructure children
		//	const [blogPosts,setBlogPosts]=useState([]); we can use this to 
	}
	return { Context , Provider };
};