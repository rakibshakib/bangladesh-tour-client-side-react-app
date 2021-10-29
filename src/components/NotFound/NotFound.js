import React from 'react';
import { ImSad } from "react-icons/all";

const NotFound = () => {
    // if you didnot found any data, then use this components for no found url
    return (
        <div className='flex items-center justify-center flex-col my-8'>
            <ImSad className='text-center text-5xl md:text-8xl text-green-400' />
            <h2 className='text-green-400 font-semibold mt-5 text-2xl md:text-5xl'>404</h2>
            <p className='text-green-400 font-semibold mt-2 text-lg md:text-2xl'>Page Not Found</p>
            <p className='text-green-600 font-semibold mt-5 text-center text-base md:text-base'>The requested URL /error was not found on this server.</p>
        </div>
    )
}

export default NotFound
