import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sessionLogoutAction } from "../store/actions/sessionActions";
import TranslatorLogo from "../images/translatorLogo.png";
import UserLogo from "../images/userLogo.png";

function Header() {
  const dispatch = useDispatch();
  const { loggedIn, username } = useSelector((state) => state.session);

  function onLogoutClick() {
    dispatch(sessionLogoutAction());
  }

  return (
    <header className="headerContainer">
      <Link to="/" className="headerName">
        <img
          src={TranslatorLogo}
          className="headerLogo"
          alt="Lost in translation"
        />
        <p>Lost in translation</p>
      </Link>

      {loggedIn && (
        <>
          <Link to="/profile" className="headerUserAccount">
            <p className="accountName">{username}</p>
            <img src={UserLogo} className="accountLogo" alt="" />
          </Link>
          <button className="logOutButton" onClick={onLogoutClick}>
            Log out
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
