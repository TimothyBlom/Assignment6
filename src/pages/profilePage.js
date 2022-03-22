import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const { loggedIn, username } = useSelector((state) => state.session);

  return (
    <>
      {!loggedIn && <Navigate to="/" replace />}
      {loggedIn && (
        <div className="ProfilePage">
          <div className="background" />

          <h1 className="lastSearched">{username}</h1>

          <div className="inputContainer">
            <div className="lastSearched">
              <h1>Last Searched Words</h1>
              <p>#1</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
