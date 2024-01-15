import React from "react";
import { NavDropdown, Navbar, Form, FormControl, Button, Container, Nav } from "react-bootstrap";


const NavbarComponent = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
            <Navbar.Brand href="#home" bg="light">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" classNmae="mr-sm-2" />
                    <button variant="outline-success">Search</button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;