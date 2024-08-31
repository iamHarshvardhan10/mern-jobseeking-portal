import axios from "axios"
import { useEffect } from "react"


const useCustomHook = () => {
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get()
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllJobs()
    }, [])
}

export default useCustomHook