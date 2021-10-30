import React from 'react';
import logo from '../../images/logo.png';
import footerBG from '../../images/footerBG.jpg';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-8 bg-green-700 font-semibold"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url(${footerBG})`
            }}>

            <div className='container mx-auto py-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-gray-300 py-5'>
                    <div className='leading-relaxed footer-text text-center md:text-left px-4'>
                        <figure>
                            <img src={logo} alt="" />
                        </figure>
                        <p className='mt-5 text-base'>Bangladesh Tours Services is a Leading Tour Operator in Bangladesh. We are specialists in organizing your dream holiday in Bangladesh also sightseeing, photography, excursion, architectural, archaeological, nature, world heritage tours for the foreign tourists. </p>


                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Important Links</h2>
                        <p>Our Facebook Page</p>
                        <p>Best Tour</p>
                        <p>Best of Bangladesh</p>
                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Get In Touch</h2>
                        <p className='mt-5'>Emai: bangladeshtourservice21@gmail.com</p>
                        <p>Phone: +880 125634789</p>
                        <p>Address: House # 53, Road # 20, Gulsan-2, Dhaka-1229, Bangladesh</p>
                    </div>

                </div>
                <hr />
                <p className="text-center text-gray-200 my-2">All Right Reserved &copy; Bangladesh Tour Services - 2021 </p>
            </div>
        </div>
    )
}

export default Footer
