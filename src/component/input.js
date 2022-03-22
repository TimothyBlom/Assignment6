import React, { Component }  from 'react';
import GoButton from '../nextLogo.png'

function input(props) {
    return (
        <div className='inputContainer'>
            <div className='input'>
              <input className='inputField' placeholder={props.placeholder}></input>
              <img className='inputButton' src={GoButton} onClick={props.onclick} />
            </div>
        </div>
        );
    }
        
export default input;