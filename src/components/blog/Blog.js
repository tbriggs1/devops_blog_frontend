import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blog from '../api/Get_Blog';
import Get_Blogs from '../api/Get_Blogs';

import '../../static/styles/blog.css';

const Blog = ({num}) => {
    
    const [data, setData] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    function createMarkup() {
        return {__html: data[1]}
    }

    return (
        <div className='blog'>
            <Get_Blog num={num} setData={setData} setTitle={setTitle} setDescription={setDescription}/>
            <h1>{title}</h1>        
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    )
}

export default Blog;