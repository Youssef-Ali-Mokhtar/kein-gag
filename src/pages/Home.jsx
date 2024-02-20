import pageClasses from './Page.module.css';
import PostsList from './post/PostsList';
import { useEffect, useState } from "react";
import FloatingButton from '../components/FloatingButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
              const response = await fetch('http://localhost:4000/api/posts/');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const json = await response.json();
              setPosts(json);
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
          };
        fetchPosts();
    }, []);

    const postFormHandler = ()=> {
        navigate('/post-form');
    }

    return ( <div className={`${pageClasses['page']} ${pageClasses['home']}`}>
        {posts && <PostsList data={posts}/>}
        <FloatingButton onClick={ postFormHandler }/>
    </div> );
}

export default Home;