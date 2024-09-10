const API_URL = import.meta.env.VITE_API_URL

export const USER_API_ENDPOINTS = {
    register: `${API_URL}/api/v1/user/register`,
    login: `${API_URL}/api/v1/user/login`,
    update: `${API_URL}/api/v1/user/updateProfile`,
}


export const JOB_API_ENDPOINTS = {
    getAllJobs:`${API_URL}/api/v1/job/getAllJobs`,
    getAllUserJobs:`${API_URL}/api/v1/job/getAllJobsForUser`
}