import React, {useState} from 'react'
import Get_Blogs from '../api/Get_Blogs';

const Blogs = () => {
    const [name, setName] = useState();

    return (
        <div>
            <h1>{name}</h1>
            <Get_Blogs setName={setName}/>
        </div>
    )
}

export default Blogs;