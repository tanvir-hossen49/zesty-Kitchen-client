/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";
import { showFirebaseError } from "../../utilities/firebaseErrorMessage";
import GoogleButton from "react-google-button";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleButtonComponent = () => {
  const { signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(result => {
        showToast("success", "login in successful");
        navigate(from);
      })
      .catch(error => {
        showFirebaseError(error);
      });
  };
  return <GoogleButton className="mx-auto mt-4" onClick={handleGoogleSignIn} />;
};

export default GoogleButtonComponent;
