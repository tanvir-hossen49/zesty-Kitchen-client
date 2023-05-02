/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";

const Login = () => {
  return (
    <Form className="container mt-4 login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="button w-100">Submit</Button>

      <p className="text-center mt-3">
        New to Ema-john? <Link to="/register">Create an account</Link>
      </p>

      <div className="divider d-flex align-items-center justify-content-center mt-4">
        <div className="line"></div>
        <div className="text">or</div>
        <div className="line"></div>
      </div>

      <GoogleButton className="mx-auto mt-4" />
      <GithubButton className="mx-auto mt-4" />
    </Form>
  );
};

export default Login;