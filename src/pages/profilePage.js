import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function ProfilePage() {
    return (
      <div className="ProfilePage">
        
        <div className='background'/>

        <div className='inputContainer'>
            <h1 className='profileName'>User name</h1>
        </div>

        <div className='inputContainer bottom'>
            <div className='lastSearched'>
                <h1>Last Searched Words</h1>
                <h2>#1 last searched word</h2>
                <h2>#2 last searched word</h2>
                <h2>#3 last searched word</h2>
                <h2>#4 last searched word</h2>
                <h2>#5 last searched word</h2>
                <h2>#6 last searched word</h2>
                <h2>#7 last searched word</h2>
                <h2>#8 last searched word</h2>
                <h2>#9 last searched word</h2>
                <h2>#10 last searched word</h2>
            </div>
        </div>

        <NavLink to='/'>
            <button className='logOutButton'>Log out</button>
        </NavLink>
      </div>
    );
  }
  
  export default ProfilePage;