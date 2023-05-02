/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="d-lg-flex align-items-center container justify-content-between mt-4">
        <div>
          <h4>Get connected with us on social networks:</h4>
        </div>
        <div className="social-media-icon fs-3 text-center">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaGithub />
          <FaGoogle />
        </div>
      </div>

      <div className="line mx-auto my-3"></div>

      <p className="text-center mb-0 copyright-text">
        &copy; 2023 Copyright: ZestyKitchen.com
      </p>
    </footer>
  );
};

export default Footer;
