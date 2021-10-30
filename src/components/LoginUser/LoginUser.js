import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginUser = () => {
    // yes this is the login section component 
    // get all login option from hooks 
    const { googleSignIn, setEmail, setIsloading, setPassword, loginWithEmailPassword, error, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home' // condition route setting 

    // google pop up signin
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri)
                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} - ${errorMessage}`)
            }).finally(() => setIsloading(false))
    }
    // get email and password 
    const userEmailHandeler = e => {
        setEmail(e.target.value)
    }
    const userPasswordHandeler = e => {
        setPassword(e.target.value)
    }
    // login with email and password handeler 
    const emailPasswordloginHandeler = e => {
        e.preventDefault()
        loginWithEmailPassword().then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user);
            history.push(redirect_uri)
            setError('')
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} - ${errorMessage}`)
            });
    }
    return (
        <div className='my-8 border-2 md:w-3/4 mx-auto p-5'>
            <div className='flex flex-col justify-between items-center'>
                <h2 className='text-3xl my-2 font-semibold'>Sign in</h2>
                <form onSubmit={emailPasswordloginHandeler} action="" className='flex flex-col justify-between items-center'>
                    <input required onBlur={userEmailHandeler} className='py-2 px-8 border-2 rounded-md my-2' type="email" placeholder='Enter Your Email' />
                    <input required onBlur={userPasswordHandeler} className='py-2 px-8 border-2 rounded-md my-2' type="password" placeholder='Enter Your Password' />
                    <input className='border py-1 cursor-pointer px-6 text-xl bg-green-700 text-white rounded-md my-2' type="submit" value="Login" />
                    <div className='register-query'><span>Dont have a account ? <Link className='text-green-700' to='/signup'>Sign Up Here</Link></span></div>
                </form>
                <p>----------Or-----------</p>
                <button onClick={handleGoogleLogin} className='cursor-pointer flex flex-row justify-between items-center my-5 border-2 rounded-md py-2 px-5'> <FcGoogle /> <span className='ml-2'>Login With Google</span></button>
            </div>
            <p className='text-center text-green-600'>{error}</p>
        </div>
    )
}

export default LoginUser
