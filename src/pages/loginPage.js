import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslatorLogo from '../images/translatorLogo.png'
import GoButton from '../images/nextLogo.png'
import Input from '../component/input'

function LoginPage() {
    return (
      <div className="loginPage">

        <div className='loginPageContent'>
            <img src={TranslatorLogo} className="loginLogo" />
            <div className='loginPageText'>
                <h1>Lost in translation</h1>
                <h3>Log in and get started</h3>
            </div>
        </div>

        <div className='inputContainer'>
            <div className='input'>
              <input className='inputField' placeholder="Type your name here"></input>
              <NavLink to='/translate'>
                <img className='inputButton' src={GoButton} />
              </NavLink>
            </div>
        </div>
      
      </div>
    );
  }
  
  export default LoginPage;