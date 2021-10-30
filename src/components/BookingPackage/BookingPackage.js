import React, { useEffect, useState } from 'react';
import BackToHome from '../BackBtn/BackToHome';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { BiCategory, BiTime, MdOutlineLocalHotel, FaBus, GoLocation, MdAttachMoney } from "react-icons/all"


const BookingPackage = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [tourPackage, setTourPackage] = useState({})

    useEffect(() => {
        const url = `https://immense-tor-72446.herokuapp.com/packages/${id}`
        fetch(url).then(res => res.json()).then(data => setTourPackage(data))
    }, [id])
    const {name, image, Details, Descriptions, Cost, type, Location, Accommodation, Duration, Transportation } = tourPackage;

    const onSubmit = data => {
        data.tourName = name;
        data.bookingID = id; 
        fetch('https://immense-tor-72446.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booking Processed successfully... 😁");
                    reset();
                }
            })
    };



    return (
        <div className='container mx-auto'>
            <h2 className='text-green-700 text-center font-semibold text-2xl py-5'>Booking Your Favourite Tour Package</h2>
            {/* booking wrap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5 mx-8 justify-items-center">
                {/* booking form  */}
                <div >
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center border p-8'>
                        <div className='flex flex-col md:flex-row justify-between md:justify-center items-center '>
                            <label>Customer Name:</label>
                            <input  defaultValue={user.displayName} {...register("name")} className='border md:ml-5 py-2 px-5 mt-2 ' />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:justify-center items-center'>
                            <label>Customer Email:</label>
                            <input readOnly defaultValue={user.email}  {...register("email")} className='border md:ml-5 py-2 px-5 mt-2' />

                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:justify-center items-center'>
                            <label>Customer Phone Number:</label>
                            <input placeholder='+88 01XXXXXXXXX' {...register("phone", { required: true })} className='border py-2 md:ml-5 px-5 mt-2' />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:justify-center items-center'>
                            <select {...register("gender", { required: true })} className='border py-2 px-5 mt-2'>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="other">other</option>
                            </select>
                            <input type='date' {...register("tourDay", { required: true })} className='border py-2 md:ml-5 px-5 mt-2' />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:justify-center items-center md:mt-2'>
                            <label className='md:ml-5'>Status:</label>
                            
                            <input  defaultValue="Pending" {...register("status")} className='border py-2 md:ml-5 px-5 mt-2 text-green-700 font-medium' readOnly />
                        </div>
                        <input type="submit" className='border-2 py-2 md:ml-5 px-5 mt-4 cursor-pointer bg-green-700 rounded-md text-white hover:bg-white hover:text-green-700 transition delay-75 duration-300 ease-in-out' value="Confirm Booking" />
                    
                    </form>
                </div>
                {/* package details */}
                <div className='flex flex-col justify-items-start px-5 py-5 border rounded-md'>
                    <div>
                        <img className='border rounded-md' src={image} alt="" />
                    </div>
                    <div>
                        <h2 className='font-semibold text-2xl py-2 text-green-700'>Packages Name: {tourPackage.name}</h2>
                        <div className='text-lg py-2 font-medium'>
                            <p><BiCategory className='inline-block text-green-700 mr-2' /> <span >Tour Type: {type}</span></p>
                            <p><MdOutlineLocalHotel className='inline-block text-green-700 mr-2' /> <span>Accommodation: {Accommodation}</span></p>
                            <p><BiTime className='inline-block text-green-700 mr-2' /> <span>Duration: {Duration}</span></p>
                            <p><FaBus className='inline-block text-green-700 mr-2' /> <span>Transportation: {Transportation}</span></p>
                        </div>
                        <div className='text-lg py-2 font-medium'>
                            <h5><MdAttachMoney className='inline-block text-green-700 mr-2' /> <span>Cost: ${Cost}</span></h5>
                            <h5><GoLocation className='inline-block text-green-700 mr-2' />   <span>Location: {Location}</span></h5>
                        </div>
                        <br />
                        <div className='text-md py-2 font-base'>
                            <p>{Descriptions}</p>
                            <br />
                            <p>{Details}</p>
                        </div>
                    </div>
                </div>
            </div>

            <BackToHome />
        </div>
    )
}

export default BookingPackage
