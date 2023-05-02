/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";

const Register = () => {
  return (
    <Form className="container mt-4 login-form">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="button w-100">Submit</Button>

      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
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

export default Register;
