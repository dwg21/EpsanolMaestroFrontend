import {useContext, useEffect} from 'react';
import { Footer, Cards } from '..';
import { Box, Typography } from '@mui/material';

import './home.css'

import AuthContext from '../../context/AuthProvider';

import Counter from '../Counter/Counter';



const Home = () => {

  const {getUserData, userData} = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      getUserData()
    }
  }, [])


  
  
  

  return (
    <Box p = {2}  >
        <h2 align='center' className='heading' >
            Welcome Back {userData? userData.Username : 'user'}
        </h2>


        <div className='center'> 
          <div className='userData'>
            {userData.vocabularyCount? <Counter title ='Words Learnt' value={userData.vocabularyCount.length}/> : <p className='dataMessage'>Login to see Data</p>}
            {userData.ConjugationCount? <Counter title = 'Words Conjugated' value={userData.ConjugationCount}/> : ''}
          </div>
        </div>

        <Typography align='center'>
        Español Maestro is your number 1 tool for learnig spanish. Featuirng Several unique excercises desiged to help reinforce your memory and asist your learning. 
        </Typography>
        <Cards />

        <Box sx = {{textAlign: 'center'}} p = {4}  >
            <p>    
                More Features coming soon. </p>
            </Box>
            <Footer/>
    </Box>
    
  )
}

export default Home