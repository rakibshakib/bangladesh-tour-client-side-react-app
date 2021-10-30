import { useEffect, useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://immense-tor-72446.herokuapp.com/packages')
        .then(res=> res.json())
        .then(data=> setPackages(data))
    }, [])
    console.log(packages)
    return [packages]
}
export default usePackages;
