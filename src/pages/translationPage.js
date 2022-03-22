import React, { Component, useState }  from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslatorLogo from '../translatorLogo.png'
import GoButton from '../nextLogo.png'

function TranslationPage() {
  const [word, setWord] = useState([])

  let translateWord;
  let inputWord;

  const onChange = e => {
    inputWord = e.target.value;
    translateWord = inputWord.split("")
    console.log(inputWord)
    console.log(translateWord)
    // console.log(translateWord.replace('a', 'b'))
  }

  return (
    <div className="TranslationPage">

      <div className='background'/>

      <div className='inputContainer'>
            <div className='input'>
              <input className='inputField' onChange={onChange} placeholder="Type text you would like to translate"></input>
              <img className='inputButton' src={GoButton} onClick={() => setWord(translateWord)} />
            </div>
        </div>

        <div className='inputContainer bottom'>
          {word}
        </div>

    </div>
  );
}

export default TranslationPage;