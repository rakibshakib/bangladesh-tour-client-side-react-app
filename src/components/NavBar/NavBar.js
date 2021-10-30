import React, { useState } from 'react'
import { BsFacebook, AiOutlineTwitter, FiInstagram, FaTumblrSquare, AiOutlinePhone, AiOutlineLogin, BiLogOutCircle, FaBars } from "react-icons/all";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/tour.png';
import './Navbar.css'

const NavBar = () => {
    const { user, logOutUser } = useAuth();
    // button toogle hooks 
    const [toggle, setToogle] = useState(false);
    // toogle button handeler 
    const handleToggle = () => {
        setToogle(toggle => !toggle)
    }
    return (
        <nav>
            {/* header details */}
            <div className='flex flex-col md:flex-row justify-between items-center container mx-auto'>
                <div className='flex justify-between items-center text-xl font-medium'>
                    <BsFacebook className='text-gray-500 cursor-pointer hover:text-green-700' />
                    <AiOutlineTwitter className='text-gray-500 ml-3 cursor-pointer hover:text-green-700' />
                    <FiInstagram className='text-gray-500 ml-3 cursor-pointer hover:text-green-700' />
                    <FaTumblrSquare className='text-gray-500 ml-4 cursor-pointer hover:text-green-700' />
                </div>
                <div className='flex justify-between py-2 px-5 items-center text-xl font-medium bg-green-700 text-white'>
                    <h2>Best Tour Operator in Bangladesh</h2>
                </div>
                <div className='text-gray-500 cursor-pointer'>
                    <p className='flex justify-between items-center text-xl font-semibold hover:text-green-700'><AiOutlinePhone /> <span className='ml-2' >+88 012345678910</span></p>
                </div>
            </div>
            <hr />
            {/* header menu here */}
            <div className='mt-5 container  mx-auto'>
                <div className='text-black text-md py-2 font-medium flex items-center justify-between desktop-nav'>
                    <figure>
                        <img src={logo} alt="bangladesh tour service" />
                    </figure>
                    <div>
                        <NavLink className='nav-items py-3 px-3 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/"><span>Home</span></NavLink>
                        <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/allpackages"><span>All Tour Packages</span></NavLink>
                        <NavLink className=' nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/my-booking"><span>My Booking</span></NavLink>
                        <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/manage-booking"><span>Manange Booking</span></NavLink>
                        <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/add-package"><span>Add New Package</span></NavLink>
                        {
                            user.email ? <button onClick={logOutUser} className='nav-items rounded-md py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-ou hover:bg-green-700 hover:text-white'><BiLogOutCircle className='inline-block' /> Sign Out</button>
                                :
                                <NavLink className='nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out hover:bg-green-700 hover:text-white' to="/signin"><AiOutlineLogin className='inline-block' /> Sign In</NavLink>
                        }
                    </div>
                </div>
                {/* for mobile responsive */}

                <div className="mobile-nav">
                    <div className='text-black text-md py-2 font-medium flex items-center justify-between'>
                        <figure>
                            <img src={logo} alt="bangladesh tour service" />
                        </figure>
                        <button onClick={handleToggle} className='text-2xl toggle border-2 border-gray-100 py-2 px-3 rounded-md'><FaBars /></button>
                    </div>
                    <div className={`nav-link responsive-nav ${toggle ? 'show-navs' : 'hide-navs'} flex flex-col justify-center items-center mt-5`}>
                        <NavLink className='nav-items py-3 px-3' to="/"><span>Home</span></NavLink>
                        <NavLink className='nav-items py-3 px-3' to="/allpackages"><span>All Tour Packages</span></NavLink>
                        <NavLink className=' nav-items py-3 px-3' to="/my-booking"><span>My Booking</span></NavLink>
                        <NavLink className='nav-items py-3 px-3' to="/manage-booking"><span>Manange Booking</span></NavLink>
                        <NavLink className='nav-items py-3 px-3' to="/add-package"><span>Add New Package</span></NavLink>
                        {
                            user.email ? <button onClick={logOutUser} className='nav-items rounded-md py-3 px-3'><BiLogOutCircle className='inline-block' /> Sign Out</button>
                                :
                                <NavLink className='nav-items py-3 px-2' to="/signin"><AiOutlineLogin className='inline-block' /> Sign In</NavLink>
                        }
                    </div>
                </div>
            
        </div>

        </nav >
    )
}

export default NavBar
