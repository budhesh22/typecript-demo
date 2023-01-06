import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Demo-List" id="basic-nav-dropdown">
              <Link to="/user-login" className="nav-link text-light">
                <Typography variant="p" component="p">
                  <LoginIcon />
                  Login
                </Typography>
              </Link>
              <Link to="/user-register" className="nav-link text-light">
                <Typography variant="p" component="p">
                  <VpnKeyIcon />
                  Register
                </Typography>
              </Link>
              <Link to="/mui-grid" className="nav-link text-light text-center">
                <Typography variant="p" component="p">
                  MuiGrid
                </Typography>
              </Link>
              <Link to="/mui-all" className="nav-link text-light text-center">
                <Typography variant="p" component="p">
                  MuiAll
                </Typography>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
