import React, { useState } from 'react';
import GetBlogs from './GetBlogs';
import SetBlogs from './SetBlogs';

const Blogs = () => {

    const [blog, setBlog] = useState();
    const [blogs, setBlogs] = useState([]);

    return(
        <div>
            <SetBlogs setBlog={setBlog} blog={blog} setBlogs={setBlogs}/>
            <GetBlogs blog={blog} blogs={blogs}/>
        </div>
    )
}

export default Blogs;