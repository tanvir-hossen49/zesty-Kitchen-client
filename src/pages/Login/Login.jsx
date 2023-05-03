/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";
import { showFirebaseError } from "../../utilities/firebaseErrorMessage";
import GoogleButtonComponent from "./GoogleButton";
import GithubButtonComponent from "./GithubButton";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        showToast("success", "login successfull");
        form.reset();
      })
      .catch(error => {
        showFirebaseError(error);
      });
  };

  return (
    <Form onSubmit={handleLogin} className="container mt-4 login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required={true}
        />
      </Form.Group>

      <Button className="w-100" type="submit">
        Submit
      </Button>

      <p className="text-center mt-3">
        New to ZestyKitchen ? <Link to="/register">Create an account</Link>
      </p>

      <div className="divider d-flex align-items-center justify-content-center mt-4">
        <div className="line"></div>
        <div className="text">or</div>
        <div className="line"></div>
      </div>

      <GoogleButtonComponent />
      <GithubButtonComponent />
    </Form>
  );
};

export default Login;
