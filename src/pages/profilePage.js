import React, { Component }  from 'react';

function ProfilePage() {
    return (
      <div className="ProfilePage">
        
        <div className='background'/>

        <h1 className='lastSearched'>User name</h1>

        <div className='inputContainer'>
            <div className='lastSearched'>
                <h1>Last Searched Words</h1>
                <p>#1</p>
            </div>
        </div>

        <button className='logOutButton'>Log out</button>

      </div>
    );
  }
  
  export default ProfilePage;