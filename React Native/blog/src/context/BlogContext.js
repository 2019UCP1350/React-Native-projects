import createDataContext from "./createdataContext";
import JsonServer from "../api/jsonserver";

const Blogreducer=(state,action)=>{		// state here represents the intial array of blogpost
		switch (action.type)
		{
			case "get_blogpost":
				return action.payload;
			case "edit_blogpost":
				return state.map( (blogpost)=> {return (blogpost.id === action.payload.id ? action.payload:blogpost )})
			case "delete_blogpost":
				{
					return state.filter((blogPost)=> { return blogPost.id !== action.payload });
				}
			case "add_blogpost":
				return ([...state,{ id: (state.length+1) , title:action.payload.title, content:action.payload.content }]); 
			default:
				return state; 
		}
	}; 
	
const GetBlogPost=(dispatch)=>{
	return async ()=>{
		const response = await JsonServer.get('/blogpost');
		
		dispatch({type:'get_blogpost' ,payload: response.data});
	}
};
const AddBlogPost=(dispatch)=>{
	return ( async (title,content,callback)=>{
				await JsonServer.post('/blogpost',{title,content});
				dispatch({ type:"add_blogpost" ,payload:{title,content}});
					if(callback)
					{
						callback();	
					}
			}
		); // in payload the keyvalue pair have same value so title:title can be reduced to title only
};

const DeleteBlogPost=(dispatch)=>{
	return ( async (id)=>{
		await JsonServer.delete(`/blogpost/${id}`);
		dispatch({ type:"delete_blogpost" , payload:id });
	});
};

const EditBlogPost=(dispatch)=>{
	return ( async (id,title,content,callback)=>{
				await JsonServer.put(`/blogpost/${id}`,{title,content});
				dispatch({ type:"edit_blogpost" , payload:{id,title,content} });
				if(callback)
				{
					callback();	
				}
			}
		);
};

export const { Context,Provider }=createDataContext(Blogreducer,{ AddBlogPost , DeleteBlogPost,EditBlogPost,GetBlogPost},[]);

// export default syntax is used to load that paticular component when this paticular file importedbl