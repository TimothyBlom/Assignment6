import React, { useState }  from 'react';
import InputForm from "../components/InputForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import GoButton from '../images/nextLogo.png'
import A from '../images/a.png'
import B from '../images/b.png'
import C from '../images/c.png'
import D from '../images/d.png'
import E from '../images/e.png'
import F from '../images/f.png'
import G from '../images/g.png'
import H from '../images/h.png'
import I from '../images/i.png'
import J from '../images/j.png'
import K from '../images/k.png'
import L from '../images/l.png'
import M from '../images/m.png'
import N from '../images/n.png'
import O from '../images/o.png'
import P from '../images/p.png'
import Q from '../images/q.png'
import R from '../images/r.png'
import S from '../images/s.png'
import T from '../images/t.png'
import U from '../images/u.png'
import V from '../images/v.png'
import W from '../images/w.png'
import X from '../images/x.png'
import Y from '../images/y.png'
import Z from '../images/z.png'
import questionMart from '../images/questionMark.png'

function TranslationPage() {
  const [word, setWord] = useState([])
  const [inputValue, setInputValue] = useState("");
  const { loggedIn } = useSelector((state) => state.session);

  let inputWord;
  let inputSplit;

  const onChange = e => {
    inputWord = e.target.value;
    inputSplit = inputWord.split('')
    console.log(inputSplit)
  }

  return (
    <div className="TranslationPage">

      <div className='background'/>

      <div className='inputContainer'>
            <div className='input'>
              <input className='inputField' maxLength='40' onChange={onChange} placeholder="Type here to translate"></input>
              <img className='inputButton' src={GoButton} onClick={() => setWord(inputSplit)} />
            </div>
        </div>

        <div className='inputContainer bottom'>

          {word.map(letter => {
            if (letter == " ") {
              return <br />
            } else if (letter == 'a') {
              return <img className='emoji' src={A} />
            } else if (letter == 'b') {
              return <img className='emoji' src={B} />
            } else if (letter == 'c') {
              return <img className='emoji' src={C} />
            } else if (letter == 'd') {
              return <img className='emoji' src={D} />
            } else if (letter == 'e') {
              return <img className='emoji' src={E} />
            } else if (letter == 'f') {
              return <img className='emoji' src={F} />
            } else if (letter == 'g') {
              return <img className='emoji' src={G} />
            } else if (letter == 'h') {
              return <img className='emoji' src={H} />
            } else if (letter == 'i') {
              return <img className='emoji' src={I} />
            } else if (letter == 'j') {
              return <img className='emoji' src={J} />
            } else if (letter == 'k') {
              return <img className='emoji' src={K} />
            } else if (letter == 'l') {
              return <img className='emoji' src={L} />
            } else if (letter == 'm') {
              return <img className='emoji' src={M} />
            } else if (letter == 'n') {
              return <img className='emoji' src={N} />
            } else if (letter == 'o') {
              return <img className='emoji' src={O} />
            } else if (letter == 'p') {
              return <img className='emoji' src={P} />
            } else if (letter == 'q') {
              return <img className='emoji' src={Q} />
            } else if (letter == 'r') {
              return <img className='emoji' src={R} />
            } else if (letter == 's') {
              return <img className='emoji' src={S} />
            } else if (letter == 't') {
              return <img className='emoji' src={T} />
            } else if (letter == 'u') {
              return <img className='emoji' src={U} />
            } else if (letter == 'v') {
              return <img className='emoji' src={V} />
            } else if (letter == 'w') {
              return <img className='emoji' src={W} />
            } else if (letter == 'x') {
              return <img className='emoji' src={X} />
            } else if (letter == 'y') {
              return <img className='emoji' src={Y} />
            } else if (letter == 'z') {
              return <img className='emoji' src={Z} />
            } else {
              return <img className='emoji' src={questionMart} />
            } 
          })}

        </div>

        {!loggedIn && <Navigate to="/" replace />}
        {loggedIn && (

          <InputForm
            placeholder="Type text you would like to translate"
            alt="Translate"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

        )}

    </div>
  );
}

export default TranslationPage;