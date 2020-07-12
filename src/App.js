import React from 'react';
import image from './icons8-p-button-48.png';
import Home from './home';
import Whatwedo from './whatwedo';
import Gallery from './gallery';
import Contact from './contact';
import Testimonial from './testimonial';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './style.css';

export default function App() {
  return (<Router>
    <Navbar bg="invisible" variant="dark" className="navbar">
      <Navbar.Brand>
        <img
          alt=""
          src={image}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        Personify  
      </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="link-4">
          <Nav.Item>
            <Nav.Link as={Link} eventKey="link-4" to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} eventKey="link-1" to="/What We Do">What We Do</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} eventKey="link-5" to="/Tetimonial">Testimonial</Nav.Link>
          </Nav.Item>          
          <Nav.Item>
            <Nav.Link as={Link} eventKey="link-2" to="/Gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} eventKey="link-3" to="/Contact">Contact Us</Nav.Link>
          </Nav.Item>
        </Nav>
    </Navbar>
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/What We Do" exact strict component={Whatwedo} />
      <Route path="/Gallery" exact strict component={Gallery} />
      <Route path="/Testimonial" exact strict component={Testimonial} />
      <Route path="/Contact" exact strict component={Contact} />
    </Switch>    
  </Router>);
}

