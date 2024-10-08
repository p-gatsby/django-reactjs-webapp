import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions.js";
import SearchBox from "./SearchBox.js";

function Header() {
  const { user } = useSelector((state) => state.userProfile);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PROSHOP</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              {user ? (
                <NavDropdown title={user.username} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {user && user.is_staff && (
                <NavDropdown title="Admin" id="admin-menu">
                  <LinkContainer to="/admin/users">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/products">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <SearchBox />
      </Navbar>
    </div>
  );
}

export default Header;
