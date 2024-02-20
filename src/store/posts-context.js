import { createContext } from "react";

export const postsContext = createContext({
    posts:[],
    setPosts:()=>{},
    createPost:()=>{},
    deletePost:()=>{},
    updatePost:()=>{}
});