import React from 'react';
import { AiFillStar, AiOutlineStar, BiUserCircle } from "react-icons/all";

const Reviews = () => {
    return (
        <div className='container mx-auto my-6 py-5'>
            <h2 className='text-green-700 text-center font-bold text-2xl md:text-3xl'>Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
                <div className='flex flex-col justify-items-center items-center mx-2 border rounded-md p-5'>
                    <div className='flex justify-items-center text-xl items-center text-yellow-400'><AiFillStar /> <AiFillStar /> <AiFillStar /><AiFillStar /> <AiOutlineStar /> </div>
                    <h2 className='text-center font-normal text-base my-3'>We had a wonderful tour of Old Capital & Old Dhaka. Obaidul, our guide, showed us the best of Sonargaon and best of Old City, visiting River Island was fun. His service was very professional and attentive, and his command of English was proficient.</h2>
                    <h2 className='flex items-center text-green-700 text-xl'> <BiUserCircle /> <span>Adnan Ahmed</span></h2>
                </div>
                <div className='flex flex-col justify-items-center items-center mx-2 border rounded-md p-5'>
                    <div className='flex justify-items-center text-xl items-center text-yellow-400'><AiFillStar /> <AiFillStar /> <AiFillStar /><AiFillStar /> <AiOutlineStar /> </div>
                    <h2 className='text-center font-normal text-base my-3'>An amazing and wonderful 18 day tour. We knew we hit the jackpot when Karim met us at the airport. A major airline debacle found us in a panic in our Yangon to Dhaka connection. Karim came through with flying colors meeting us at “0 dark hundred” in the morning. We knew we were in the best hands ever for our extensive journey through Bangladesh.</h2>
                    <h2 className='flex items-center text-green-700 text-xl'> <BiUserCircle /> <span>Adnan Ahmed</span></h2>
                </div>
                <div className='flex flex-col justify-items-center items-center mx-2 border rounded-md p-5'>
                    <div className='flex justify-items-center text-xl  items-center text-yellow-400'><AiFillStar /> <AiFillStar /> <AiFillStar /><AiFillStar /> <AiOutlineStar /> </div>
                    <h2 className='text-center font-normal text-base my-3'>We had a wonderful tour of Old Capital & Old Dhaka. Karim, our guide, showed us the best of Sonargaon and best of Old City, visiting River Island was fun. His service was very professional and attentive, and his command of English was proficient.</h2>
                    <h2 className='flex items-center text-green-700 text-xl'> <BiUserCircle /> <span>Adnan Ahmed</span></h2>
                </div>

            </div>
        </div>
    )
}

export default Reviews
