import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';

const RegisterUser = () => {
    // user registration from usehook data
    const { googleSignIn, setName, setEmail, setPassword, createUserWithEmailPassword, error, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
// redirect user to the page from where he comes after login 
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
        })
    }
    const userEmailHandeler = e => {
        setEmail(e.target.value)
    }
    const userPasswordHandeler = e => {
        setPassword(e.target.value)
    }
    const userNameHandeler = e => {
        setName(e.target.value)
    }
    const userRegistrationHandeler = e => {
        e.preventDefault()
        createUserWithEmailPassword();
    }
    return (
        <div className='my-8 border-2 md:w-3/4 mx-auto p-5'>
            <div className='flex flex-col justify-between items-center'>
                <h2 className='text-3xl my-2 font-semibold'>Sign Up</h2>
                <form onSubmit={userRegistrationHandeler} action="" className='flex flex-col justify-between items-center'>
                    <input onBlur={userNameHandeler} type="text" required className='py-2 px-8 border-2 rounded-md my-2' placeholder='Your Name' />
                    <input onBlur={userEmailHandeler} type="email" required className='py-2 px-8 border-2 rounded-md my-2' placeholder='Enter Your Email' />
                    <input onBlur={userPasswordHandeler} type="password" required className='py-2 px-8 border-2 rounded-md my-2' placeholder='Enter Your Password' />
                    <input className='border py-1 cursor-pointer px-6 text-xl bg-green-700 text-white rounded-md my-2' type="submit" value="Register" />
                    <div className='register-query'><span>Already have a account ? <Link className='text-green-700' to='/signin'>Sign in Here</Link></span></div>
                </form>
                <p>----------Or-----------</p>
                <button onClick={handleGoogleLogin} className='cursor-pointer flex flex-row justify-between items-center my-5 border-2 rounded-md py-2 px-5'><FcGoogle /> <span className='ml-2'>Register With Google</span></button>
            </div>

            <p className='text-center text-green-600'>{error}</p>
        </div>
    )
}

export default RegisterUser
