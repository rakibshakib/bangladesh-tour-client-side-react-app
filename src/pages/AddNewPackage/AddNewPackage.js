import React from 'react';
import { useForm } from "react-hook-form";

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://immense-tor-72446.herokuapp.com/packages', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Packages Added Succesfully... 😁");
                    reset();
                }
            })
    };
    return (
        <div className='container mx-auto my-5'>
            <div>
            <h2 className='text-green-700 text-center font-semibold text-2xl py-5'>Add Packages</h2>
                <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col  border p-8'>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>1. Package Name:</label>
                        <input  {...register("name")} className='border md:ml-5 py-2 px-5 mt-2 ' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>2. image url:</label>
                        <input   {...register("image")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>3. Duration:</label>
                        <input   {...register("Duration")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>4. Tour Type:</label>
                        <input   {...register("type")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>5. Transportation:</label>
                        <input   {...register("Transportation")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row  justify-items-start items-center '>
                        <label>6. Accommodation:</label>
                        <input   {...register("Accommodation")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>7. Descriptions:</label>
                        <input   {...register("Descriptions")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>8. Details:</label>
                        <input   {...register("Details")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>9. Cost:</label>
                        <input   {...register("Cost")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>10. Location:</label>
                        <input   {...register("Location")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row  justify-items-start items-center '>
                        <label>11. Unique Key:</label>
                        <input   {...register("key")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div>
                    <input type="submit" className='border-2 py-2 md:ml-5 px-5 mt-4 cursor-pointer bg-green-700 rounded-md text-white hover:bg-white hover:text-green-700 transition delay-75 duration-300 ease-in-out' value="Add Packages " />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewPackage
