import postClasses from './Post.module.css';

const Post = ({title, description}) => {
    return ( <div className={postClasses['post']}>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
    </div> );
}

export default Post;