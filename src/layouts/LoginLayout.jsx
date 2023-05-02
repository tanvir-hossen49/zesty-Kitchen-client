/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";
import Footer from "../pages/Shared/Footer";

const LoginLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LoginLayout;
