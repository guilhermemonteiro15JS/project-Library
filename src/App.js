import React from "react";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Library from "./pages/library";
import Search from "./pages/search";
import "bootstrap/dist/css/bootstrap.min.css";

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
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Library Store </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
            <Nav.Link href="/signIn">SignIn</Nav.Link>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
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
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
