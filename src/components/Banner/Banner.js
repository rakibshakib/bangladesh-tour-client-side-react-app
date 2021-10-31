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
            <h2 className='text-white font-semibold text-base md:text-2xl py-5 mx-5'>Choosing a tour operator can be a daunting task, and will oftentimes make or break your overall travel experience. If you are looking for a leading tour operator in Bangladesh, “Bangladesh Tours Service” is the right choice for you. </h2>
            <Link to='/signin'><button className='text-white font-medium rounded-2xl py-2 px-8 hover:bg-white bg-green-700 hover:text-green-700 outline-none  transition delay-75 duration-300 ease-in-out'>Book Now</button></Link>
        </div>
    </div>
    )
}

export default Banner
