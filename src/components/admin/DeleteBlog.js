import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DeleteBlog = () => {
    const [item, setItem] = useState();

    useEffect(() => {
        axios.get(`http://192.168.1.100:5000/blogs`)
        .then(res => {
            const data = res.data;
            let array = []
            console.log(data)
            for (const i in data['blogs']){
                let test = ['/'+data['blogs'][i]['id'], data['blogs'][i]['name'],data['blogs'][i]['id']]
                array.push(test)
            }
            setItem(array)
            for (const i in data['blogs']){
                array.push()
            }
            
        })
      
    }, []);

    const deleteBlog = (blog) => {
        console.log(blog)
    }


    return(
      <div>
          {item.map(d => ( 
                <div>
                    <h1>{d[1]}</h1>
                    <button onClick={() => deleteBlog(d[2])}>Delete</button>
                </div>
            ))}
      </div>
    );
}

export default DeleteBlog;