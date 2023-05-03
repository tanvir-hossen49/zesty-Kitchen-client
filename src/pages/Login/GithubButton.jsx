/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";
import { showFirebaseError } from "../../utilities/firebaseErrorMessage";
import GithubButton from "react-github-login-button";
import { useLocation, useNavigate } from "react-router-dom";

const GithubButtonComponent = () => {
  const { signInGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGithubSignIn = () => {
    signInGithub()
      .then(result => {
        showToast("success", "login in successful");
        navigate(from);
      })
      .catch(error => {
        showFirebaseError(error);
      });
  };
  return <GithubButton className="mx-auto mt-4" onClick={handleGithubSignIn} />;
};

export default GithubButtonComponent;
