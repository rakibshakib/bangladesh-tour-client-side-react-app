import React, { useState } from 'react';
import { FaUserAstronaut, HiOutlineMail, GrStatusGood, BsCalendarDate, GiCartwheel, IoMdCall } from "react-icons/all";

const UserBookingCart = ({item}) => {
    const [isApproved, setIsApproved] = useState(item?.status)

    const changeStatus = id => {
        console.log("this is ID", id)
        fetch("https://immense-tor-72446.herokuapp.com/update-booking", {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ _id: id })
        }).then(res => res.json())
            .then(data => {
                alert("Booking Status Updated successfully... 😁");
                setIsApproved("Approved");
            })
    }
    return (
        <div className='manage-order-cart shadow-lg p-2 border-2 rounded-3xl my-2 mx-2'>
            <div className='flex flex-col py-2  md:mx-auto text-sm font-medium'>
                <h2 className='flex items-center mt-2 py-2 px-5'> <GiCartwheel className='inline-block mr-1' /> Package: <span className='text-green-700 ml-1'> {item?.tourName || "Admin Email"}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-5'> <FaUserAstronaut className='inline-block mr-2' /> Name: <span className='text-green-700 ml-1'> {item?.name || "Admin Name"}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-5'> <HiOutlineMail className='inline-block mr-1' /> Email: <span className='text-green-700 ml-1'> {item?.email || "Admin Email"}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-5'> <IoMdCall className='inline-block mr-1' /> Phone: <span className='text-green-700 ml-1'> {item?.phone || "Admin Email"}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-5'> <BsCalendarDate className='inline-block mr-1' /> Date: <span className='text-green-700 ml-1'> {item?.tourDay || "Admin Email"}</span></h2>
                <h2 className='flex items-center  py-2  px-5 mt-1 '> <GrStatusGood className='inline-block mr-1 hover:text-white' /> Status: <span className='ml-1'> {isApproved} </span></h2> 
                <button onClick={() => changeStatus(item._id)} className='ml-2 border rounded-3xl py-2 cursor-pointer hover:bg-green-700 text-green-600 font-medium hover:text-white px-5 mt-2'>Want Approved ?</button>
            </div>
        </div>
    )
}

export default UserBookingCart
