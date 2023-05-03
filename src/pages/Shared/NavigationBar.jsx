/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/showToast";

const NavigationBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        showToast("success", "logout successful");
      })
      .catch(error => {});
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/home" className="nav-brand">
          ZestyKitchen
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-lg-5 gap-3 text-dark fs-5 mt-lg-0 mt-3">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </Nav>

          <Nav className="align-items-lg-center md:flex-rows">
            {user ? (
              <>
                <span
                  className="my-3 me-lg-3 my-md-0 "
                  title={user.displayName}
                >
                  <img
                    src={user.photoURL}
                    alt=""
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </span>

                <div onClick={handleLogOutUser}>
                  <Link to="/login" className="button login">
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <Link to="/login" className="button login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
