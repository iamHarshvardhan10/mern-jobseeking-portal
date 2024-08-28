const API_URL = import.meta.env.VITE_API_URL

export const USER_API_ENDPOINTS = {
    register: `${API_URL}/api/v1/user/register`,
    login: `${API_URL}/api/v1/user/login`,
    update: `${API_URL}/api/v1/user/updateProfile`,
}