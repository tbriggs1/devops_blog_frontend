import Auth from '@aws-amplify/auth';
import React, { createElement, useEffect, useState } from 'react'
import {Navigate} from "react-router-dom";


const Authentication = ({component}) => {
    const [isAuth, setLoggedIn] = useState(true);

    useEffect(() => {
        (async () => {
            let user = null;
            try {
                user = await Auth.currentAuthenticatedUser();
                
                if (user) {
                    setLoggedIn(true);

                } else {
                    setLoggedIn(false);
                } 
            } catch (e) {
                setLoggedIn(false);
            }
            
        }) ();
        
    });
    //console.log(testUser)
    if (isAuth) {
        return(
            createElement(component)
        )
    } else {
        return(
        < Navigate to='/Login' />
        )
    }
}

export default Authentication;