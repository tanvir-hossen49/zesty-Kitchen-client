import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/" className="nav-brand">
          ZestyKitchen tanvir
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-lg-5 gap-3 mt-lg-0 mt-3">
            <NavLink className="text-dark fs-5">Home</NavLink>
            <NavLink className="text-dark fs-5">Blog</NavLink>
            <NavLink className="text-dark fs-5">Contract</NavLink>
          </Nav>

          <Nav className="align-items-lg-center md:flex-rows">
            {user ? (
              <>
                <span className="my-3 me-lg-3 my-md-0 fs-4" title={user}>
                  <FaUserAlt />
                </span>

                <Link to="/logout" className="button">
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login" className="button">
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
