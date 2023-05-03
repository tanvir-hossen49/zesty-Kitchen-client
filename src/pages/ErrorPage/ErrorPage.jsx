/* eslint-disable no-unused-vars */
import React from "react";
import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";
import man from "../../assets/icon.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="error-page">
        <img src={man} alt="" className="position-absolute" />

        <div className="text-light text-center position-absolute top-50 start-50 translate-middle">
          <p className="fw-bolder error-text">
            404
            <br />
            Page Not Found
          </p>
          <p className="my-4 fs-4">
            the page you are looking for does not seem to exit
          </p>
          <Link to="/" className="button border border-white">
            Go to home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
