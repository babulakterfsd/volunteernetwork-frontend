import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import Logo from "../../Assets/Images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar
      className="py-4"
      expand="md"
      sticky="top"
      style={{ backgroundColor: "#fff", borderBottom: "1px solid #ccc" }}
    >
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand className="text-secondary fw-bolder">
          <Link to="/" className="text-decoration-none fw-bolder ms-md-5">
            <img
              src={Logo}
              alt="logo"
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <span className="logoitem text-light-green d-inline-block mx-2">Volunteer Network</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-md-0 me-lg-5 fw-semi-bold d-flex align-items-center">
            <Link to="/home" className="text-decoration-none mx-2 mb-2 mb-md-0">
              <span className="text-muted menuitem">Home</span>
            </Link>
            <Link
              to="/about"
              className="text-decoration-none  mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">About</span>
            </Link>
            <Link
              to="/allpackages"
              className="text-decoration-none mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">packages</span>
            </Link>
            <Link
              to="/process"
              className="text-decoration-none mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">Process</span>
            </Link>
            <Link
              to="/events"
              className="text-decoration-none mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">Events</span>
            </Link>
            <Link
              to="/order"
              className="text-decoration-none mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">Order</span>
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none mx-2 mb-2 mb-md-0"
            >
              <span className="text-muted menuitem">Contact</span>
            </Link>

            <div className="user-state-in-header ms-md-5">
              {user?.email || user?.displayName ? (
                <div className="loggedin">
                  {
                    user?.photoURL && <img
                      src={user?.photoURL}
                      alt="userimg"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "100%",
                        marginRight: "4px",
                      }}
                    />
                  }
                  <span className="text-muted fw-bold mx-md-2 me-2">
                    {user?.email?.split('@')[0]}
                  </span>
                  <Link to="/login" className="text-decoration-none">
                    <Button
                      onClick={logOut}
                      className="btn-light-green fw-bold text-white ms-md-4 px-4 py-2 shadow-none"
                    >
                      LogOut
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="text-decoration-none ms-md-5">
                  <Button className="btn-light-green fw-bold text-white px-4 py-2 shadow-none">
                    LogIn
                  </Button>
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;