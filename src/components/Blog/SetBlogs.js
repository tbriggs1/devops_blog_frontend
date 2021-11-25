import React from 'react';

const SetBlogs = ({blog, setBlog, setBlogs,blogs}) => {
    
    const onClickHandler = (e) => {
      setBlogs([...blogs, blog]);
      setBlog("");
    }

    const onChangeValue = (e) => {
        setBlog(e.target.value);
        console.log(e.target.value);
    }

    return(
        <div>
            <textarea type="text" value={blog} onChange={onChangeValue}></textarea>
            <button onClick={onClickHandler}>Submit</button>
        </div>
    )
}

export default SetBlogs;