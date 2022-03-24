import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Translation from "../components/Translation";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { sessionUpdateTranslationsAttemptAction } from "../store/actions/sessionActions";

function TranslationPage() {
  const [inputValue, setInputValue] = useState("");
  const [translation, setTranslation] = useState([]);
  const dispatch = useDispatch();
  const { id, loggedIn, translations } = useSelector((state) => state.session);

  const onTranslationSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const translation = inputValue
      .toLowerCase()
      .split("")
      .map((letter, index) =>
        /[a-z]/.test(letter) ? (
          <img
            key={index}
            src={require(`../images/${letter}.png`)}
            alt={letter}
            className="emoji"
          />
        ) : null
      );
    setTranslation(translation);

    const updatedProfile = { id, translations: [inputValue, ...translations] };
    dispatch(sessionUpdateTranslationsAttemptAction(updatedProfile));
  };

  return (
    <>
      {!loggedIn && <Navigate to="/" replace />}
      {loggedIn && (
        <div className="TranslationPage">
          <div className="background" />
          <InputForm
            placeholder="Type here to translate"
            alt="Translate"
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSubmit={onTranslationSubmit}
          />
          <Translation translation={translation} />
        </div>
      )}
    </>
  );
}

export default TranslationPage;
