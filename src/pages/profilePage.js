import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const { loggedIn, username } = useSelector((state) => state.session);

  return (
    <>
      {!loggedIn && <Navigate to="/" replace />}
      {loggedIn && (

        <div className="ProfilePage">
          <div className="background" />

          <div className='inputContainer'>
            <h1 className='profileText'>{username}</h1>
          </div>

          <div className="inputContainer bottom">
            <div className="profileText">
              <h1>Last Searched Words</h1>
              
              {/* Last searched words here */}

              <button className='deleteButton'>Delete search hirtory</button>

            </div>
          </div>

        </div>

      )}
    </>
  );
}

export default ProfilePage;