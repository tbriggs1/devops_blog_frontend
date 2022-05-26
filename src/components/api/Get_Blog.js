import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Get_Blog = ({num, setData, setTitle, setDescription}) => {

    const url = `https://www.tbriggserver.co.uk:5002/blog?id=`+num
    useEffect(() => {
        axios.get(url)
        .then(res => {
            const data = res.data;
            let array = [];
            
            array.push(data['blog']['title'])
            array.push(data['blog']['description'])
            setTitle(data['blog']['title'])
            let parser = new DOMParser();
            let conValue = parser.parseFromString(data['blog']['description'], 'text/html');
            setDescription(conValue['firstElementChild']['innerHTML']);
            setData(array)
        })
      
    }, []);


    return(
      <div classname="hide_blog">

      </div>
    );
}

export default Get_Blog;