import axios from 'axios';
import React, { useState } from 'react'


const CreateBlog = () => {
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [num, setNum] = useState();
    let temp = ""
    let tempD = ""
    let tempN = 0
    const getName = (e) => {
        temp = temp + e['nativeEvent']['data']
    }

    const getDes = (e) => {
        tempD = tempD + e['nativeEvent']['data']
    }

    const getNum = (e) => {
        tempN = tempN + e['nativeEvent']['data']
    }

    const postCall = (e) => {
        e.preventDefault();
        setName(temp)
        setDesc(tempD)
        setNum(tempN)
        
        var data = JSON.stringify({
            "name": temp,
            "description": tempD
          });
          
          var config = {
            method: 'post',
            url: 'http://51.89.220.72:5000/blog/'+tempN,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    

    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" onChange={getName} />
            </label>
            <label>
                Description:
                <input type="text" name="description" onChange={getDes}/>
            </label>
            <label>
                ID:
                <input type="number" name="description" onChange={getNum}/>
            </label>
            <button onClick={postCall}>Submit</button>
        </form>
    )
}

export default CreateBlog;