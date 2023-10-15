import React from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Library from "./pages/library";
import Search from "./pages/search";
import Registration from "./pages/registration";
import Footer from "./pages/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import styled from "styled-components";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const BodyApp = styled.body`
  min-height: 100vh;
  background-color: papayawhip;
  justify-items: center;
`;

const StyledNav = styled.nav`
  background-color: #f2b705;
`;

const PageContent = styled.div`
  min-height: 100vh; /* Altura mínima de 100vh (viewport height) */
  background-color: papayawhip;
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyledNav>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="sticky-top"
        >
          <Navbar.Brand href="/home">Book da Wish</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/lybrary">Library</Nav.Link>
              <Nav.Link href="/signIn">SignIn</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
              {/* <div className="search-container ml-auto">
              <div className="input-group">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <div className="input-group-append">
                  <Button variant="outline-info" className="custom-button">
                    <span className="bi bi-search"></span>
                  </Button>
                </div>
              </div>
            </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledNav>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/home"
                element={
                  <PageContent>
                    <Home />
                  </PageContent>
                }
              />
              <Route
                path="/library"
                element={
                  <PageContent>
                    <Library />
                  </PageContent>
                }
              />
              <Route
                path="/signIn"
                element={
                  <PageContent>
                    <SignIn />
                  </PageContent>
                }
              />
              <Route
                path="/registration"
                element={
                  <PageContent>
                    <Registration />
                  </PageContent>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
