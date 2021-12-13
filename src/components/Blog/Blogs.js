import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {loadBlogs} from '../../actions/getBlogs';

const Blogs = () => {

    const data = useSelector(state => state.blogs.devBlogs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogs());
    })
  console.log(data)
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Blogs;