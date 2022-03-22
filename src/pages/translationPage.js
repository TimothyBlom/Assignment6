import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslatorLogo from '../translatorLogo.png'
import GoButton from '../nextLogo.png'

function TranslationPage() {
  return (
    <div className="TranslationPage">

      <div className='background'/>

      <div className='inputContainer'>
            <div className='input'>
              <input className='inputField' placeholder="Type text you would like to translate"></input>
              <NavLink to='/translate'>
                <img className='inputButton' src={GoButton} />
              </NavLink>
            </div>
        </div>

    </div>
  );
}

export default TranslationPage;