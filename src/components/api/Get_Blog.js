import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blog = ({num, setData}) => {

    const url = `http://172.18.0.1:5000/blog/`+num
    useEffect(() => {
        axios.get(url)
        .then(res => {
            const data = res.data;
            let array = [];
            
            array.push(data['blog']['name'])
            array.push(data['blog']['description'])
            console.log(array)
            setData(array)
        })
      
    }, []);


    return(
      <div>

      </div>
    );
}

export default Get_Blog;