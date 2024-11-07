import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brnadlogo  from "../assets/img/favion.svg"
import "../assets/stylesheets/components/Header.scss"



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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )


}

export default Siteheader