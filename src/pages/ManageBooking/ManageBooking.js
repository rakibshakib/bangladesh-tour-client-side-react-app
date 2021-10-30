import React from 'react'
import useAuth from '../../hooks/useAuth'
import { GrUserAdmin, FaUserAstronaut, HiOutlineMail, GrStatusGood, BsCalendarDate, GiCartwheel, IoMdCall } from "react-icons/all";
import useAllBooking from '../../hooks/useAllBooking';
import './ManageOrder.css'

const ManageBooking = () => {
    const { user } = useAuth();
    const [allOrder] = useAllBooking();
    console.log(allOrder)

    const changeStatus = id => {
        console.log("this is ID", id)
    }
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-xl font-bold'>Manage Booking:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-5 py-5 mx-8 justify-items-center border-2 rounded-3xl text-xl font-semibold'>
                <h2 className='flex items-center'> <GrUserAdmin className='inline-block mr-2' /> User Type: <span className='text-green-700 ml-3'> Admin </span></h2>
                <h2 className='flex items-center'> <FaUserAstronaut className='inline-block mr-2' /> User Name: <span className='text-green-700 ml-3'> {user?.displayName || "Admin Name"}</span></h2>
                <h2 className='flex items-center'> <HiOutlineMail className='inline-block mr-2' /> User Email: <span className='text-green-700 ml-3'> {user?.email || "Admin Email"}</span></h2>
            </div>

            <h2 className='text-xl font-bold'>All Booking: </h2>

            <div className='flex flex-wrap'>
                {
                    allOrder.map(item => <div className='manage-order-cart shadow-lg p-2 border-2 rounded-3xl my-2 mx-2'
                        key={item._id}
                    >
                        <div className='flex flex-col py-2  md:mx-auto text-sm font-medium'>
                            <h2 className='flex items-center mt-2 py-2 px-5'> <GiCartwheel className='inline-block mr-1' /> Package: <span className='text-green-700 ml-1'> {item?.tourName || "Admin Email"}</span></h2>
                            <h2 className='flex items-center mt-2 py-2 px-5'> <FaUserAstronaut className='inline-block mr-2' /> Name: <span className='text-green-700 ml-1'> {item?.name || "Admin Name"}</span></h2>
                            <h2 className='flex items-center mt-2 py-2 px-5'> <HiOutlineMail className='inline-block mr-1' /> Email: <span className='text-green-700 ml-1'> {item?.email || "Admin Email"}</span></h2>
                            <h2 className='flex items-center mt-2 py-2 px-5'> <IoMdCall className='inline-block mr-1' /> Phone: <span className='text-green-700 ml-1'> {item?.phone || "Admin Email"}</span></h2>
                            <h2 className='flex items-center mt-2 py-2 px-5'> <BsCalendarDate className='inline-block mr-1' /> Date: <span className='text-green-700 ml-1'> {item?.tourDay || "Admin Email"}</span></h2>
                            <h2 onClick={() => changeStatus('5')} className='flex items-center border py-2 rounded-3xl px-5 mt-2'> <GrStatusGood className='inline-block mr-1' /> Status: <span className='ml-1 text-green-700 '> Pending </span></h2>
                        </div>
                    </div>)
                }
            </div>


            <div>

            </div>
        </div>
    )
}

export default ManageBooking
