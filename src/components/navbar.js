import React from 'react'
import { Component } from 'react'; 
import { Link } from 'react-router-dom'
//import '../styles/Navbar.css';
//import logo from '../assets/logo_white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Form,FormControl,NavDropdown,Button }from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'


function Nav_bar() {
    return(
        <>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </>
    );
}
export default Nav_bar;