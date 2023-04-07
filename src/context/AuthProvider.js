import { createContext, useState } from "react";

import ServerApi from '../serverApi/axios';
const AuthContext = createContext({});

const UserDataUrl = '/api/v1/userdata'; 


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [userData, setUserData] = useState({});

    // if (userData) {
    //     return
    // }

    const getUserData = async () => {
        try {
            const  {data} = await ServerApi.get(
            UserDataUrl,
            {headers: {'Content-Type': 'application/json'}}
            ) 
            setUserData(data.data[0])
            }
        catch (error) {
            console.log(error)
    }
}

    return (
        <AuthContext.Provider value = {{
            auth,
            setAuth, 
            getUserData,
            userData, 
            setUserData
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;