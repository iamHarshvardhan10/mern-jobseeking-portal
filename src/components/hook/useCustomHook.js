import { JOB_API_ENDPOINTS } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setJobs } from "@/redux/slice/jobSlice"


const useCustomHook = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_ENDPOINTS.getAllJobs}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllJobs()
    }, [])
}

export default useCustomHook