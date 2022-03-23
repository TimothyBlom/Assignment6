import React, { useState } from "react";
import TranslatorLogo from "../images/translatorLogo.png";
import InputForm from "../components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAttemptAction } from "../store/actions/loginActions";

function LoginPage() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.session);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }

    dispatch(loginAttemptAction(inputValue));
  };

  return (
    <>
      {loggedIn && <Navigate to="/translate" replace />}
      {!loggedIn && (
        <div className="loginPage">
          <div className="loginPageContent">
            <img src={TranslatorLogo} className="loginLogo" alt="" />
            <div className="loginPageText">
              <h1>Lost in translation</h1>
              <h2>Log in and get started</h2>
            </div>
          </div>

          <InputForm
            placeholder="Type your name"
            alt="Login"
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSubmit={onLoginSubmit}
          />
        </div>
      )}
    </>
  );
}

export default LoginPage;
