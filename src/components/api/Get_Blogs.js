import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blogs = (props) => {

    useEffect(() => {
        axios.get(`localhost:5002/blogs`)
        .then(res => {
            const data = res.data;
            let array = []
            console.log(data)
            for (const i in data['blogs']){
                let test = [
                    '/'+data['blogs'][i]['id'], data['blogs'][i]['title'],data['blogs'][i]['id'],
                data['blogs'][i]['description'],data['blogs'][i]['image'],data['blogs'][i]['date']]
                array.push(test)
            }
            props.setName(array)
            console.log(data['blogs'][1])
            for (const i in data['blogs']){
                array.push()
            }
            
        })
      
    }, []);


    return(
      <div className='all_blogs'>

      </div>
    );
}

export default Get_Blogs;