import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blog = ({num, setData}) => {

    const url = `http://51.89.220.72:5002/blog?id=`+num
    useEffect(() => {
        axios.get(url)
        .then(res => {
            console.log(res.data)
            const data = res.data;
            let array = [];
            
            array.push(data['blog']['title'])
            array.push(data['blog']['description'])
            console.log(array)
            setData(array)
        })
      
    }, []);


    return(
      <div classname="hide_blog">

      </div>
    );
}

export default Get_Blog;