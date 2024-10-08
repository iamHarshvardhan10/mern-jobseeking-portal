import { setAllJobs } from "@/redux/slice/jobSlice";
import { JOB_API_ENDPOINTS } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_ENDPOINTS.getAllUserJobs}`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllJobs()
    }, [])
}

export default useGetAllJobs