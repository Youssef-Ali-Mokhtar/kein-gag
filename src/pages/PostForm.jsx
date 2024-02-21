import { useState } from 'react';
import Classes from './Page.module.css';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
    const [postData, setPostData] = useState({title:'', description:''});
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
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

                const json = await response.json();
                if (!response.ok) {
                    setError(json.message);
                    setEmptyFields(json.emptyFields);
                    throw new Error('Network response was not ok');
                  }
                console.log(json);
                setPostData({title:'', description:''});
                setError(null);
                setEmptyFields([]);
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
                className={
                    (!postData.title) && emptyFields.includes('title')? Classes['empty-field']:""
                }
            />
            <textarea
                placeholder="Description"
                name="description"
                onChange={handleInputData}
                value={postData.description}
                className={
                    (!postData.description) && emptyFields.includes('description')? Classes['empty-field']:""
                }
            />
            <button>
                Submit
            </button>
            {error&&<>
                <p>{error}</p>
            </>}
        </form>
    </div> );
}
 
export default PostForm;