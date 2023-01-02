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
            <Link to="/" className="nav-link text-light">
              <h5>Home</h5>
            </Link>
            <Link to="/about" className="nav-link text-light">
              <h5>About</h5>
            </Link>
            <Link to="/product" className="nav-link text-light">
              <h5>Product</h5>
            </Link>
            <Link to="/news" className="nav-link text-light">
              <h5>News</h5>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
