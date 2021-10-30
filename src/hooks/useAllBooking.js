import { useEffect, useState } from "react";

const useAllBooking = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://immense-tor-72446.herokuapp.com/booking-data')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    return [allOrder]
}
export default useAllBooking;