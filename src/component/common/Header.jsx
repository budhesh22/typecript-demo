import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Demo-List" id="basic-nav-dropdown">
              <Link
                to="/user-login"
                className="nav-link text-light text-center"
              >
                <h6>Login</h6>
              </Link>
              <Link
                to="/user-register"
                className="nav-link text-light text-center"
              >
                <h6>Register</h6>
              </Link>
              <Link to="/mui-grid" className="nav-link text-center text-light">
                <h6>MuiGrid</h6>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
