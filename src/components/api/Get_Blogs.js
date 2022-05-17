import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blogs = (props) => {

    useEffect(() => {
        axios.get(`http://localhost:5000/blogs`)
        .then(res => {
            const data = res.data;
            let array = []
            console.log(data)
            for (const i in data['blogs']){
                let test = ['/'+data['blogs'][i]['id'], data['blogs'][i]['title'],data['blogs'][i]['id']]
                array.push(test)
            }
            props.setName(array)
            for (const i in data['blogs']){
                array.push()
            }
            
        })
      
    }, []);


    return(
      <div>

      </div>
    );
}

export default Get_Blogs;