import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blogs = (props) => {

    useEffect(() => {
        axios.get(`http://192.168.1.100:5000/blogs`)
        .then(res => {
            const persons = res.data;
            let array = []
            console.log(persons)
            for (const i in persons['blogs']){
                array.push(persons['blogs'][i]['name'])
            }
            props.setName(array)
        })
      
    }, []);


    return(
      <div>

      </div>
    );
}

export default Get_Blogs;