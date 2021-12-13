import Auth from '@aws-amplify/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useInput } from './UseInput';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const history = useNavigate();
    
    const {value: email, bind: bindEmail} = useInput("");
    const {value: password, bind: bindPassword} = useInput("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            await Auth.signIn(email, password);
            console.log('Signed in')
            history("/Admin");
        } catch (error) {
            console.log('Failured')
        }
        setLoading(false);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <input type="email" {...bindEmail} label="email"/>
                <input type="password" {...bindPassword} label="password" />
                <button disabled={loading} type="submit">{loading}Login</button>
            </form>
        </>
    )
}

export default Login;