import postClasses from './Post.module.css';
import { formatDistanceToNow } from 'date-fns';

const Post = ({title, description, date}) => {
    return ( <div className={postClasses['post']}>
        <p>{formatDistanceToNow(new Date(date), {addSuffix: true})}</p>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
    </div> );
}

export default Post;