import React, { useEffect, useContext } from 'react';
import './login.css';

import AuthContext from '../../context/AuthProvider';


const LogoutPage = () => {

const {setUserData} = useContext(AuthContext);


// Removes Data and forces reload
useEffect(() => {
    setUserData({})
}, [])




    return (
    <div className='logOutPage'>
        <h2>You have Successfuly logged out. </h2>
        <h4>We hope to see you again soon</h4>

    </div>
)
}

export default LogoutPage