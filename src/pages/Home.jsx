import pageClasses from './Page.module.css';
import PostsList from './post/PostsList';

const dummyData = [
    {id:"_ONE", title:'title one', description:'description one'},
    {id:"_TWO", title:'title two', description:'description two'},
    {id:"_THREE", title:'title three', description:'description three'},
];

const Home = () => {
    return ( <div className={`${pageClasses['page']} ${pageClasses['home']}`}>
        <PostsList data={dummyData}/>
    </div> );
}

export default Home;