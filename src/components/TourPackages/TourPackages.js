import React from 'react'
import usePackages from '../../hooks/usePackages'
import Packages from '../Packages/Packages';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const TourPackages = () => {
    const [packages] = usePackages()
    return (
        <div className='container mx-auto my-5'>
            <h2 className='text-center font-bold text-2xl text-green-700 py-2'>We Offering</h2>
            <p className='text-center font-semibold text-md py-5'>Whether you are looking for a sightseeing tour, a photography tour, archaeological tour or a nature tour, we have you covered with these exciting day tours.</p>
            <hr />

            <div className='my-12'>
                {
                    !packages.length ? <div className='flex justify-center mt-5'>
                        <Stack sx={{ color: 'grey.700' }} spacing={2} direction="col">
                            <CircularProgress color="success" /> <span>Data Loading..</span>
                        </Stack>
                    </div> :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 mx-8 justify-items-center">
                            {
                                packages.slice(2, 8).map(item => <Packages key={item.key} item={item} />)
                            }
                        </div>

                }
            </div>
            <Link to='/allpackages'>
                <h2 className='border font-semibold rounded-2xl text-center py-3 mx-auto my-8 w-1/4 hover:bg-green-700 hover:text-white text-green-700 transition delay-75 duration-300 ease-in-out'>
                    See All Packages
                </h2>
            </Link>
        </div>
    )
}

export default TourPackages
