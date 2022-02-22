import React, {useState} from 'react'
import Get_Blogs from '../api/Get_Blogs';

const Blogs = () => {
    const [name, setName] = useState([]);

    return (
        <div>
            <Get_Blogs setName={setName} name={name}/>
            {name.map(d => (<h1>{d}</h1>))}
        </div>
    )
}

export default Blogs;