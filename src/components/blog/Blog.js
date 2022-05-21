import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blog from '../api/Get_Blog';
import Get_Blogs from '../api/Get_Blogs';

import '../../static/styles/blog.css';

const Blog = ({num}) => {
    
    const [data, setData] = useState([]);
    
    return (
        <div className='blog'>
            <Get_Blog num={num} setData={setData}/>
            <h1>{data[0]}</h1>
            <p>{data[1]}</p>         
            <p>{data[10]}</p>   
        </div>
    )
}

export default Blog;