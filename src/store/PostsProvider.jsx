import { useReducer } from "react";
import { postsContext } from "./posts-context";

const initialValue = {
    posts:[]
};

const reducer = (state, action)=> {

    if(action.type === 'SET_POSTS') {
        return {
            ...state,
            posts: action.payload
        };
    } else if(action.type === 'CREATE_POST'){
        return {
            ...state,
            posts:[...state, action.payload]
        }
    } else if(action.type === 'DELETE_POST') {
        const posts = state.posts.filter(post => {
            return post.id !== action.payload;
        });
        return {
            ...state,
            posts
        }
    } else if(action.type === 'UPDATE_POST') {
        const posts = state.posts.map(post => {
            return post.id === action.payload.id? action.payload: post;
        });
        return {
            ...state,
            posts
        }
    } else {
        return state;
    }
}

const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const setPosts = (posts)=> {
        dispatch({type:'SET_POSTS', payload: posts});
    };

    const createPost = (post)=> {
        dispatch({type:'CREATE_POST', payload: post});
    };

    const deletePost = (id)=> {
        dispatch({type:'DELETE_POST', payload: id});
    }

    const updatePost = (id)=> {
        dispatch({type:'UPDATE_POST', payload: id});
    }

    const reducerValues = {
        posts: state.posts,
        setPosts,
        createPost,
        deletePost,
        updatePost
    }

    return ( <postsContext.Provider value={ reducerValues }>
        { children }
    </postsContext.Provider> );
}
 
export default PostsProvider;