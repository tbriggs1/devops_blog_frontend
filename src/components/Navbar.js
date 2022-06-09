import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../static/styles/navbar.css'

const Navigationbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='Navbar'>
            <Container>
            <Navbar.Brand>Tom Briggs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link><Link className='nav-item' to="/">Home</Link></Nav.Link>
                <Nav.Link><Link className='nav-item' to="/blogs">Blogs</Link></Nav.Link>
                <Nav.Link><Link className='nav-item' to="/contact">Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className='nav-main'>
        //     <h1>Tom Briggs</h1>
        //     <div className='nav'>
        //         <Link className='nav-item' to="/">Home</Link>
        //         <Link className='nav-item' to="/blogs">Blogs</Link>
        //         <Link className='nav-item' to="/contact">Contact</Link>
        //     </div>
        // </div>
    )
}

export default Navigationbar;