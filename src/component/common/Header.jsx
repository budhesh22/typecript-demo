import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Demo-List" id="basic-nav-dropdown">
              <Link to="/sign-in" className="nav-link text-light text-center">
                <h6>SignIn</h6>
              </Link>
              <Link to="/sign-up" className="nav-link text-light text-center">
                <h6>SignUp</h6>
              </Link>
              <Link to="/product" className="nav-link text-center text-light">
                <h6>Product</h6>
              </Link>
              <Link to="/news" className="nav-link text-center text-light">
                <h6>News</h6>
              </Link>
              <Link to="/mui" className="nav-link text-center text-light">
                <h6>Mui</h6>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
