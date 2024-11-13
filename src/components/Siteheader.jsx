import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brnadlogo from "../assets/img/favion.svg"
import LightIcon from "../assets/img/sun-icon.svg"
import MoonIcon from "../assets/img/moon-icon.svg"
import { Themecontext } from '../context/Themecontext';
import "../assets/stylesheets/components/Header.scss";



let Siteheader = (props) => {

    const { theme, toggletheme } = useContext(Themecontext)

    console.log("theme",theme)

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
                            <button onClick={toggletheme} className='theme-btn'>
                            <img src={theme==="light" ? MoonIcon:LightIcon}/>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )


}

export default Siteheader