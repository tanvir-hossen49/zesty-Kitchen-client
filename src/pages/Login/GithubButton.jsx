/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";
import { showFirebaseError } from "../../utilities/firebaseErrorMessage";
import GithubButton from "react-github-login-button";

const GithubButtonComponent = () => {
  const { signInGithub } = useContext(AuthContext);
  const handleGithubSignIn = () => {
    signInGithub()
      .then(result => {
        showToast("success", "login in successful");
      })
      .catch(error => {
        showFirebaseError(error);
      });
  };
  return <GithubButton className="mx-auto mt-4" onClick={handleGithubSignIn} />;
};

export default GithubButtonComponent;
