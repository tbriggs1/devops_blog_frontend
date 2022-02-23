import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blogs from '../api/Get_Blogs';

const Blogs = ({setId}) => {
    const [name, setName] = useState([]);
    

    
    return (
        <div>
            <Get_Blogs setName={setName} setId={setId}/>
            {name.map(d => ( 
                <Link onClick={() => setId([d[0], d[2]])} to={d[0]}>{d[1]}</Link>
            ))}
        </div>
    )
}

export default Blogs;