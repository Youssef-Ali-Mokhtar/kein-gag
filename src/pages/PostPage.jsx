import { useEffect, useState } from 'react';
import Classes from './Page.module.css';
import { useParams } from 'react-router-dom';
import { usePostsContext } from '../hooks/usePostsContext';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const { deletePost } = usePostsContext();
    const { id } = useParams();

    useEffect(()=> {
        const fetchPost = async ()=>{
            try {            
                const response = await fetch('http://localhost:4000/api/posts/' + id);
                if(!response.ok) {
                    throw new Error('Failed to fetch post');    
                }
                const json = await response.json();
                setPost(json)
            } catch(error) {
                console.log("Error: "+ error.message);
            }

        }
        fetchPost();
    }, [id]);


    const deleteHandler = async ()=> {
        const options = {
            method: 'DELETE'
          };
        try {            
            const response = await fetch('http://localhost:4000/api/posts/' + id, options);
            if(!response.ok) {
                throw new Error('Failed to delete post');
            }
            const json = await response.json();
            console.log(json);
            deletePost(id);
            navigate('/');
        } catch(error) {
            console.log("Error: "+ error.message);
        }
    }

    return ( <div className={Classes['page']}>
        <h1>{ post && post.title }</h1>
        <p>{ post && post.description }</p>
        <button
            className={Classes['delete-button']}
            onClick={deleteHandler}>
            Delete
        </button>
    </div> );
}
 
export default PostPage;