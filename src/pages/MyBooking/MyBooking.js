import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BackToHome from '../../components/BackBtn/BackToHome'
import PopularTour from '../../components/PopularTour/PopularTour';

const MyBooking = () => {
    
    const [myOrder, setMyOrder] = useState([])
    // get data by email 
    const { user } = useAuth()
    // get mybooking by email 
    useEffect(() => {
        fetch('https://immense-tor-72446.herokuapp.com/my-booking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.email })
        }).then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user.email])


// my booking delete operation 
    const deleteBooking = id => {
        const proceed = window.confirm("are You Sure Want to Delete Your Tour Packages")
        if (proceed) {
            const url = `https://immense-tor-72446.herokuapp.com/booking-data/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingProducts = myOrder.filter(item => item._id !== id);
                        setMyOrder(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-green-700 text-center font-semibold text-2xl py-5'>My Booking</h2>

            <div>
                {/* use details */}
                <div className='text-green-700 p-8 border-2 rounded-2xl my-2'>
                    <h2 className='text-xl font-semibold text-black my-2'>User Information</h2>
                    <h2 className='text-xl font-semibold'>Name: {user.displayName}</h2>
                    <h2 className='text-lg font-semibold'>Email: {user.email}</h2>
                    <h2 className='text-lg font-semibold'>You Have - {myOrder.length || 0} Booking from Bangladesh Tour Service</h2>

                </div>
                {/* booking details */}
                <div className='p-8 border-2 rounded-2xl my-5'>
                    <h2 className='text-md font-semibold text-green-700'>Your Tour Packeges {myOrder.length || 0}</h2>
                    {
                        myOrder.map(item => <div
                            className='border rounded-lg p-5 my-5'
                            key={item._id}
                        >
                            <p className='text-md font-semibold text-green-700'><span>Packages Name: {item.tourName} </span></p>
                            <p><span className='text-md font-semibold text-green-700'>Tour Date: {item.tourDay}</span></p>
                            <p><span className='text-md font-semibold text-green-700'>Status: {item.status}</span></p>
                            <p>Gender: {item.gender}</p>
                            <p>Phone Number: {item.phone}</p>

                            <Stack spacing={2} sx={{ m: 2 }}>
                                <Button onClick={() => deleteBooking(item._id)} variant="outlined" color="error">
                                    Delete Booking
                                </Button>
                            </Stack>
                        </div>)
                    }

                </div>

            </div>
            <PopularTour/>
            <BackToHome />
        </div>
    )
}

export default MyBooking
