import React, {useContext} from 'react';
import './navbar.css'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

import AuthContext from '../../context/AuthProvider';

import ServerApi from '../../serverApi/axios';
const UserlogoutUrl = '/api/v1/auth/logout'; 



const Navbar2 = () => {
    const {userData} = useContext(AuthContext);
    const [excercisesDropdown, setExcercisesDropdown] = useState(false);
    const [grammarDropdown, setgrammarDropdown] = useState(false);
    const [hamburgerAcitve, setHamburgerAcitve] = useState(false)

    const handleExcerciesMenu= (e) => {
        e.preventDefault()
        setExcercisesDropdown(!excercisesDropdown)
        setgrammarDropdown(false)
    }

    const handlegrammarMenu= (e) => {
        e.preventDefault()
        setgrammarDropdown(!grammarDropdown)
        setExcercisesDropdown(false)
    }

    const handlehamburgerMenu= (e) => {
        e.preventDefault()
        setHamburgerAcitve(!hamburgerAcitve)
    }

    const closeAllMenus = () => {
      setHamburgerAcitve(false);
      setExcercisesDropdown(false);
      setgrammarDropdown(false);
    }



    const handleLogout = async () => {
      closeAllMenus()
      try {
          await ServerApi.get(
          UserlogoutUrl,
          {headers: {'Content-Type': 'application/json'}}
        ) 
        }
    catch (error) {
        console.log(error)
}

    }


  return (
    <div className="navigation">
        <div className="nav-container">
        <div className="brand">
          <span>EM </span><SchoolIcon style={{color: 'white',  fontSize: '35px'}} />
          
        

        </div>
        <nav>
            <div className="nav-mobile "><a  onClick = {handlehamburgerMenu} id="nav-toggle" className={hamburgerAcitve === true ? 'active': ''} href="#!"><span ></span></a></div>
                <ul className= {hamburgerAcitve ? "nav-list": "nav-list mobile-hidden"  }>
                    <li>
                    <Link onClick={closeAllMenus} to = '/home' >Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeAllMenus} to="/translator">Translator</Link>
                    </li>
                    <li>
                    <a onClick={handleExcerciesMenu} href="#!">Excercises</a>
                      <ul  className = {excercisesDropdown === false ? 'nav-dropdown hidden' : 'nav-dropdown '}>
                        <li>
                        <Link onClick = {closeAllMenus} to = '/conjugation' >Conjuagtion</Link>
                        </li>
                        <li>
                        <Link onClick = {closeAllMenus}  to = '/vocabulary'>Vocabulary</Link>
            </li>
            <li>
              <Link onClick = {closeAllMenus}  to="/story">Story</Link>
            </li>
          </ul>
        </li>

        <li>
          <a onClick = {handlegrammarMenu} href="#!">Grammar</a>
          <ul  className = {grammarDropdown === false ? 'nav-dropdown hidden' : 'nav-dropdown '}>
            <li>
              <Link onClick = {closeAllMenus} to="/past">Past Tense</Link>
            </li>
            <li>
              <Link onClick = {closeAllMenus} to="/future">Future Tense</Link>
            </li>
            <li>
              <Link onClick = {closeAllMenus} to="/subjunctive">The Subjunctive</Link>
            </li>
          </ul>
        </li>
        <li>
          {
            userData.Username ? 
              <Link onClick = {handleLogout} to="/logedout">Log out </Link>
              :
              <Link onClick = {closeAllMenus} to="/">Log In</Link>

          }
        </li>
      </ul>
    </nav>
  </div>
  </div>
  )
}

export default Navbar2