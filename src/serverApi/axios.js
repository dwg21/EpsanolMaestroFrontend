import axios from 'axios'; 

axios.defaults.withCredentials = true

const ServerApi = axios.create({
    // baseURL:'https://espanolmaestroserver.onrender.com',
    baseURL: "http://localhost:3005",
    withCredentials: true,

})

export default ServerApi