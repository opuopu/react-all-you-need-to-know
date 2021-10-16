import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from '../../context/Useauth';

const Header = () => {
  const {user,logout} = Useauth()
    return (
        <div>
              <Navbar bg="primary"  collapseOnSelect  expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link  as={Link} to="/home">Home</Nav.Link>
      <Nav.Link  as={Link} to="/register">register</Nav.Link>
      <Nav.Link  as={Link} to="/toggle">toggle</Nav.Link>
      {
        user?.email? <button className="bg-info p-0 m-0 text-white" onClick={logout}>Log out</button>
        : <Nav.Link  as={Link} to="/login">Login</Nav.Link>
      }
      
    </Nav>
    
    
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;