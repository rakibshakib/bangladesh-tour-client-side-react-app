import React from 'react'
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url(${banner})`
        }}>

        <div className='text-alignment'>
            
            <Link to='/signin'><button className='text-white font-medium rounded-2xl py-2 px-8 hover:bg-white bg-green-700 hover:text-green-700 outline-none  transition delay-75 duration-300 ease-in-out'>Book Now</button></Link>
        </div>
    </div>
    )
}

export default Banner
