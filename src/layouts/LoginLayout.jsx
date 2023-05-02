/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar";

const LoginLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default LoginLayout;
