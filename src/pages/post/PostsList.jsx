import Post from "./Post";
import { Link } from "react-router-dom";

const PostsList = ({ data }) => {
    return ( <>
        {
            data.map(post =>
                <Link key={post.id} to={'/posts/'+post.id}>
                    <Post title={post.title} description={post.description}/>
                </Link>
            )
        }
    </> );
}
 
export default PostsList;