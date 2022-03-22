import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslatorLogo from '../translatorLogo.png'
import UserLogo from '../userLogo.png'

function Header() {
    return (
      <div className="headerContainer">

        <NavLink to='/' className="headerName">
            <img src={TranslatorLogo} className="headerLogo" />
            <p>Lost in translation</p>
        </NavLink>

        <NavLink to="/profile" className="headerUserAccount">
            <p className='accountName'>User name</p>
            <img src={UserLogo} className='accountLogo' />
        </NavLink>

      </div>
    );
  }
  
  export default Header;