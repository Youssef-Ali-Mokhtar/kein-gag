import { useEffect, useState } from 'react';
import pageClasses from './Page.module.css';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch('http://localhost:4000/api/posts/'+id);
            const json = await response.json();
            if(response.ok) {
                setPost(json);
            }
        }
        fetchPosts();
    }, [id]);

    return ( <div className={pageClasses['page']}>
        <h1>{ post && post.title }</h1>
        <h1>{ post && post.description }</h1>
    </div> );
}
 
export default PostPage;