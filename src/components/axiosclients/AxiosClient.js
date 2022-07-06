import axios from "axios"
require('dotenv').config()
const GaimizClient = axios.create({
    baseURL: process.env.REACT_APP_GAIMIZ_BACKEND_URL,
    timeout: 1000,
})

