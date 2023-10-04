import React from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Library from './Library';
import Store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/signIn">SignIn</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/store" element={<Store/>}/>
          </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
