import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blogs = (props) => {

    

    useEffect(() => {
        axios.get(`http://51.89.220.72:5000/blogs`)
        .then(res => {
            const persons = res.data;
            console.log(persons)
            props.setName("hi");
        })
      
    })


    return(
      <div>

      </div>
    );
}

export default Get_Blogs;