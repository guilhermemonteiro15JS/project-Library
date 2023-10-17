import React, { useState } from "react";
import { BrowserRouter, Router, Route, Routes, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Library from "./pages/library";
import Search from "./components/SearchTerm";
import Registration from "./pages/registration";
import Administration from "./pages/administration";
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
  margin: 0 auto;
`;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const updateLoginStatus = (status) => {
    setLoggedIn(status);
  };
  
  const logout = () => {
    updateLoginStatus(false);
  };

  return (
    <BrowserRouter>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Navbar.Brand as={Link} to={loggedIn ? "/home" : "/signIn"}>
          Library Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-bar">
            {loggedIn ? (
              <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/library">
                  Library
                </Nav.Link>
                <Nav.Link as={Link} to="/search">
                  Search
                </Nav.Link>
                <div className="search-container ml-auto">
                </div>
                <Button
                  variant="outline-info"
                  onClick = {()=> {
                    logout();
                    navigate('/signIn');
                  }}
                  className="custom-button"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/signIn">
                  SignIn
                </Nav.Link>
                <Nav.Link as={Link} to="/registration">
                  Registration
                </Nav.Link>
                <Nav.Link as={Link} to="/administration">
                  Administration
                </Nav.Link>
                <div className="search-container ml-auto">
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/"
                element={<SignIn updateLoginStatus={updateLoginStatus} />}
              />
              <Route path="/" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/search" element={<Search />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/administration" element={<Administration />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
