import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function TranslationPage() {
  const [inputValue, setInputValue] = useState("");
  const { loggedIn } = useSelector((state) => state.session);

  return (
    <>
      {!loggedIn && <Navigate to="/" replace />}
      {loggedIn && (
        <div className="TranslationPage">
          <div className="background" />

          <InputForm
            placeholder="Type text you would like to translate"
            alt="Translate"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      )}
    </>
  );
}

export default TranslationPage;
