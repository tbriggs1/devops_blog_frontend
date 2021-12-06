// import React, { useEffect } from 'react';
// import axios from 'axios';



const GetBlogs = ({blogs}) => {
    // const options = {
    //     method: 'GET',
    //     url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    //   };

    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });   
    // }, [])


    return(
        <div>
            <print>{blogs}</print>
        </div>
    )
}

export default GetBlogs;