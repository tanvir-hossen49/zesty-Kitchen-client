/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (user) return children;
  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
