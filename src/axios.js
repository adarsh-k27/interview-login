import axios from 'axios'

const AxiosInstance=axios.create({
    baseURL: "https://interview-backend.onrender.com//api"
})

export default AxiosInstance;