import React from 'react';
import cox from '../../images/popular/cox.jpg'
import ctg from '../../images/popular/ctg.jpg'
import dhaka from '../../images/popular/dhaka.jpg'
import sylhet from '../../images/popular/sylhet.jpg';
import './Popular.css';

const PopularTour = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className="text-center my-5">
                <h2 className='font-bold py-5 text-lg md:text-3xl text-green-700'>Popular Destinations</h2>
                <p className='font-normal md:text-md text-base '>From mangrove forests to beaches, Bangladesh has something for even the most discriminating traveler. These areas continue to be the most popular among our guests</p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='popular-card'>
                    <img src={dhaka} alt="" />
                    <h2 className="text-center font-medium">Dhaka</h2>
                </div>
                <div className='popular-card'>
                    <img src={sylhet} alt="" />
                    <h2 className="text-center font-medium">Sylhet</h2>
                </div>
                <div className='popular-card'>
                    <img src={ctg} alt="" />
                    <h2 className="text-center font-medium">Chittagong</h2>
                </div>
                <div className='popular-card'>
                    <img src={cox} alt="" />
                    <h2 className="text-center font-medium">Cox-Bazar</h2>
                </div>
            </div>
            
        </div>
    )
}

export default PopularTour
