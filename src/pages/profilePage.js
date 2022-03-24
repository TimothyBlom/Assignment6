import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TranslationList from "../components/TranslationList";
import { sessionUpdateTranslationsAttemptAction } from "../store/actions/sessionActions";

function ProfilePage() {
  const dispatch = useDispatch();
  const { id, loggedIn, username, translations } = useSelector(
    (state) => state.session
  );
  const tenMostRecentTranslations = translations.slice(0, 10);

  const onClearTranslationsClick = () => {
    const updatedProfile = { id, translations: [] };
    dispatch(sessionUpdateTranslationsAttemptAction(updatedProfile));
  };

  return (
    <>
      {!loggedIn && <Navigate to="/" replace />}
      {loggedIn && (
        <div className="ProfilePage">
          <div className="background" />

          <div className="inputContainer">
            <h1 className="profileText">{username}</h1>
          </div>

          <div className="inputContainer bottom">
            <TranslationList translations={tenMostRecentTranslations} />
            <button className="deleteButton" onClick={onClearTranslationsClick}>
              Clear translations
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
