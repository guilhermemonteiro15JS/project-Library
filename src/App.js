import React from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Navbar.Brand href="/home">Library Store </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-bar">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/signIn">SignIn</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/administration">Administration</Nav.Link>
            <div className="search-container ml-auto">
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
            </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/search" element={<Search />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/administration" element={<Administration/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
