/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";
import { showFirebaseError } from "../../utilities/firebaseErrorMessage";
import GoogleButtonComponent from "./GoogleButton";
import GithubButtonComponent from "./GithubButton";
import "../../styles/login.css";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      showToast("warn", "password too sort");
      return;
    }

    createUser(email, password)
      .then(result => {
        showToast("success", "user create successful");
        updateUserProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            showToast("success", "user update successful");
            navigate("/");
            form.reset();
          })
          .catch(error => {
            showFirebaseError(error);
            form.reset();
          });
      })
      .catch(error => {
        showFirebaseError(error);
        form.reset();
      });
  };

  return (
    <Form onSubmit={handleRegister} className="container mt-4 login-form">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter Photo URL"
          name="photoURL"
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required={true}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required={true}
        />
      </Form.Group>

      <Button className="button w-100" type="submit">
        Submit
      </Button>

      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
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

export default Register;
