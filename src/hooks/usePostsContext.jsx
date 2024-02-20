import { useContext } from "react"
import { postsContext } from "../store/posts-context"

export const usePostsContext = ()=> {
    const context = useContext(postsContext);

    if(!context) {
        throw Error('useAuthContext must be used inside a useAutheContext provider')
    }

    return context;
}