import { useState, useEffect} from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";

import ServerApi from '../../serverApi/axios';



const LOGIN_URL = '/api/v1/auth/login'; 
const REGISTER_URL = '/api/v1/auth/register';
const CHECK_USER_URL = '/api/v1/users/checkloggedin'

const Login = () => {
    const navigate = useNavigate();

    //Checks if user is already logged in and redirects to main page
    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await ServerApi.get(
                    CHECK_USER_URL, 
                    // {headers: {'Content-Type': 'application/json'}}
                    )  
                    if (data) {
                        console.log('Working here')
                        navigate("/home");
                    }
                
    
            } catch (error) {
                console.log(error)
            }
        }

        checkUser()
    

    }, [])


    





    const [loginOrRegister, SetloginOrRegister] = useState(true)    
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [registerValues, setRegisterValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errMsg, setErrMsg] = useState(null);

    

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleChangeRegister = (e) => {
        setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
    };




    const loginSubmit = async (e) => {
        e.preventDefault(); //stops reloading page
        const {email, password} = values;
        const loginUser = {email, password};
        try {
                await ServerApi.post(
                LOGIN_URL, 
                loginUser,
                {withCredentials: true}
                )  

            setValues({ name: '', email: '', password: '' });
            navigate("/home");

        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)
            console.log({ text: error.response.data.msg });
        }
        
    }

    const guestAccess = async () => {
        const loginUser = {
            "email": "john@gmail.com",
            "password": "secret"
        }
        try {
                await ServerApi.post(
                LOGIN_URL, 
                loginUser,
                {headers: {'Content-Type': 'application/json'}},
                
                )  

            setValues({ name: '', email: '', password: '' });
            navigate("/home");

        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)

        }
    }



    const registerSubmit = async (e) => {
        e.preventDefault(); //stops reloading page
        const {name , email, password} = registerValues;
        const NewUser = {name, email, password};
        console.log(NewUser)
        try {
            const { data } = await ServerApi.post(
                REGISTER_URL, 
                NewUser,
                {headers: {'Content-Type': 'application/json'}}
                )  

            setValues({ name: '', email: '', password: '' });
            setErrMsg(null)
            navigate("/home");
        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)
            console.log(errMsg)


        }
        
    }
    

    return   (
    <div className='loginPage-Container'>

    <div className="login-page">
        <div className="form">

            {  !loginOrRegister ? 
(               
    <form className="Register-form" onSubmit={registerSubmit}>
                <input
                placeholder='Name'
                type="name"
                name="name"
                value = {registerValues.UserName}
                onChange = {handleChangeRegister}
                />
            
            <input
                placeholder='Email'
                type="email"
                name="email"
                value = {registerValues.UserEmail}
                onChange = {handleChangeRegister}
                />
            <input
                placeholder='password'
                type="password"
                name="password"
                value = {registerValues.UserPassword}
                onChange = {handleChangeRegister}
                />
            <button>Register</button>
            <p className="message">Not registered? <a href="#" onClick={() => SetloginOrRegister(!loginOrRegister)}>Create an account</a></p>



        </form>


) : (
    
    <form className="login-form" onSubmit={loginSubmit}>
                <input
                    placeholder='email'
                    type="email"
                    name="email"
                    value = {values.email}
                    onChange = {handleChange}
                    />
                <input
                    placeholder='password'
                    type="password"
                    name="password"
                    value = {values.password}
                    onChange = {handleChange}
                    />
                <div className='test'>
                <button>login</button>
                </div>
                <button onClick={guestAccess}>Guest Access</button>
                <p className="message">Already registered? <a href="#" onClick={() => SetloginOrRegister(!loginOrRegister)}>Login</a></p>
            </form>
            )
            
            
        }

        <p className='errorMessage'>{errMsg}</p>




        </div>
    </div>
        </div>
    )
}

export default Login