import React from "react";
import GoButton from "../nextLogo.png";

function InputForm({ placeholder, alt, inputValue, setInputValue, onSubmit }) {
  function onInputChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form className="inputContainer" onSubmit={onSubmit}>
      <div className="input">
        <input
          className="inputField"
          placeholder={placeholder}
          value={inputValue}
          onChange={onInputChange}
        />
        <input className="inputButton" type="image" src={GoButton} alt={alt} />
      </div>
    </form>
  );
}

export default InputForm;
