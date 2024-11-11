import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brnadlogo from "../assets/img/favion.svg"
import "../assets/stylesheets/components/Header.scss"
import { Button } from 'react-bootstrap';
import Aboutsection from './About';
import Banner from './Banner';



let Siteheader = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary site-header">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={brnadlogo} alt="brand-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Button >About</Button> */}
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )


}

export default Siteheader