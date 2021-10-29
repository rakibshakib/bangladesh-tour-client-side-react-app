import { CircularProgress, Stack } from '@mui/material'
import React from 'react'
import Packages from '../../components/Packages/Packages'
import usePackages from '../../hooks/usePackages'

const AllPackages = () => {
    const [packages] = usePackages()
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-2xl text-green-700 py-2'>All Tour Packages</h2>
            <p className='text-center font-base text-md py-2 my-5'>Choosing a tour operator can be a daunting task, and will oftentimes make or break your overall travel experience. If you are looking for a leading tour operator in Bangladesh, “Bangladesh Tour Service” is the right choice for you. With our professional and enthusiastic Tour Guide, you will never feel like a stranger, we always provide world-class services with the highest quality guaranteed.</p>
            <hr />

            {
                !packages.length ? <div className='flex justify-center mt-5'>
                    <Stack sx={{ color: 'grey.700' }} spacing={2} direction="col">
                        <CircularProgress color="success" /> <span>Data Loading..</span>
                    </Stack>
                </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 mx-8">
                        {
                            packages.map(item => <Packages key={item.key} item={item} />)
                        }
                    </div>

            }
        </div>
    )
}

export default AllPackages
