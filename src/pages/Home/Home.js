import React from 'react'
import Banner from '../../components/Banner/Banner'
import PopularTour from '../../components/PopularTour/PopularTour'
import TourPackages from '../../components/TourPackages/TourPackages'

const Home = () => {
    return (
        <div>
            <Banner/>
            <TourPackages/>
            <hr />
            <PopularTour/>
        </div>
    )
}

export default Home
