import axios from 'axios'; 

axios.defaults.withCredentials = true

const ServerApi = axios.create({
    baseURL:'https://espanolmaestroserver.onrender.com',
    withCredentials: true,

})

export default ServerApi

