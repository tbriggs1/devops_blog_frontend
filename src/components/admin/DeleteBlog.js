import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Get_Blogs from '../api/Get_Blogs'

const DeleteBlog = () => {
    const [name, setName] = useState([]);

    const deleteBlog = (blog) => {
        const delete_url = 'http://localhost:5000/blog/'+blog
        axios.delete(delete_url)
    }


    return(
      <div>
          <Get_Blogs setName={setName}/>
          {name.map(d => ( 
                <div>
                    <h1>{d[1]}</h1>
                    <button onClick={() => deleteBlog(d[2])}>Delete</button>
                </div>
            ))}
      </div>
    );
}

export default DeleteBlog;