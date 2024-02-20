import { useState } from 'react';
import Classes from './Page.module.css';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
    const [postData, setPostData] = useState({title:'', description:''});
    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const postPost = async()=> {
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
              };

            try {
                const response = await fetch('http://localhost:4000/api/posts/', options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                const json = await response.json();
                console.log(json);
                setPostData({title:'', description:''});
                navigate('/');
            } catch(error) {
                console.log('Error: '+ error.message);
            }
        }
        postPost();
    }

    const handleInputData = (e)=> {
        const {name, value} = e.target;
        setPostData(prev=>({
            ...prev,
            [name]: value
        }));
    }

    return ( <div className={Classes['page']}>
        <form className={Classes['post-form']} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleInputData}
                value={postData.title}
                required
            />
            <textarea
                placeholder="Description"
                name="description"
                onChange={handleInputData}
                value={postData.description}
                required
            />
            <button>
                Submit
            </button>
        </form>
    </div> );
}
 
export default PostForm;