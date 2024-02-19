import pageClasses from './Page.module.css';
import PostsList from './post/PostsList';
import { useEffect, useState } from "react";

const Home = () => {
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch('http://localhost:4000/api/posts/');
            const json = await response.json();
            if(response.ok) {
                setPosts(json);
            }
        }
        fetchPosts();
    }, []);

    return ( <div className={`${pageClasses['page']} ${pageClasses['home']}`}>
        {posts && <PostsList data={posts}/>}
    </div> );
}

export default Home;