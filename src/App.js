import React, { useState } from "react";
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
import { BodyApp, StyledNav, PageContent } from "./appstyled";

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



const App = () => {
  // const [usAuthenticated, SetIsAtuthenthicated] = useState(false);
  // const navigate = useNavigate();

  // const SiginON = () => {
  //   SetIsAtuthenthicated(false);
  //   navigate("/sigIn");
  // };

  return (
    <BrowserRouter>
      <StyledNav>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/home">
            <i class="bi bi-book"></i>Book da Wish<i class="bi bi-book"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/signIn">SignIn</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
              <Nav.Link href="/library">Library</Nav.Link>
              <Nav.Link href="/administration">
                <i class="bi bi-person-circle"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledNav>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route
                path="/"
                element={
                  <PageContent>
                    <SignIn />
                  </PageContent>
                }
              />
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
              <Route
                path="/administration"
                element={
                  <PageContent>
                    <Administration />
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
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
