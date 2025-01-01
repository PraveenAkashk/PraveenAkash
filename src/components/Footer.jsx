import { Container } from "react-bootstrap";
import "../assets/stylesheets/components/Footer.scss"

let Footer = () => {
    let getYear = new Date().getFullYear()
    
    return (
        <div className="footer-main">
            <Container>
                <div className="footer-wrap text-center">
                    &copy; {getYear} All rights reserved.
                </div>
            </Container>
        </div>
    )

}

export default Footer;