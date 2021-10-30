import React from 'react'
import useAuth from '../../hooks/useAuth'
import { GrUserAdmin, FaUserAstronaut, HiOutlineMail} from "react-icons/all";
import useAllBooking from '../../hooks/useAllBooking';
import './ManageOrder.css'
import UserBookingCart from '../../components/UserBookingCart/UserBookingCart';

const ManageBooking = () => {
    const { user } = useAuth();
    const [allOrder] = useAllBooking();
    // this is manage booking components
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-xl font-bold'>Manage Booking: </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-5 py-5 mx-5 justify-items-center md:border-2 rounded-3xl text-base md:text-xl font-semibold'>
                <h2 className='flex items-center'> <GrUserAdmin className='inline-block mr-2' /> UserType: <span className='text-green-700 md:ml-3'> Admin </span></h2>
                <h2 className='flex items-center'> <FaUserAstronaut className='inline-block mr-2' /> UserName: <span className='text-green-700 md:ml-3'> {user?.displayName || "Admin Name"}</span></h2>
                <h2 className='flex items-center'> <HiOutlineMail className='inline-block mr-2' /> UserEmail: <span className='text-green-700 md:ml-3'> {user?.email || "Admin Email"}</span></h2>
            </div>

            <h2 className='text-xl font-bold'>All Booking: {allOrder.length} </h2>

            <div className='flex flex-wrap'>
                {
                    allOrder.map(item => <UserBookingCart key={item._id}  item={item} /> )
                }
            </div>      
        </div>
    )
}

export default ManageBooking
