import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blog from '../api/Get_Blog';
import Get_Blogs from '../api/Get_Blogs';

const Blog = ({num}) => {
    
    const [data, setData] = useState([]);
    
    return (
        <div>
            <Get_Blog num={num} setData={setData}/>
            <h1>{data[0]}</h1>
            <h3>{data[1]}</h3>            
        </div>
    )
}

export default Blog;