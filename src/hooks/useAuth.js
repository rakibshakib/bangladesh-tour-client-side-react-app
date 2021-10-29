import { useContext } from "react"
import { UseContext } from "../context/AuthProvider"

const useAuth = () => {
    return useContext(UseContext);
}
export default useAuth;