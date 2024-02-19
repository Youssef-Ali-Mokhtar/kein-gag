import { useEffect, useState } from 'react';
import pageClasses from './Page.module.css';
import { useParams } from 'react-router-dom';

const dummyData = [
    {id:"_ONE", title:'title one', description:'description one'},
    {id:"_TWO", title:'title two', description:'description two'},
    {id:"_THREE", title:'title three', description:'description three'},
];


const PostPage = () => {
    const [data, setData] = useState({title:null, description:null});
    const { id } = useParams();

    useEffect(()=>{
        // console.log(id);
        const [post] = dummyData.filter((post)=>{
            return post.id === id;
        });
        setData({title: post.title, description: post.description});
    }, [id])

    return ( <div className={pageClasses['page']}>
        <h1>{ data && data.title }</h1>
        <h1>{ data && data.description }</h1>
    </div> );
}
 
export default PostPage;