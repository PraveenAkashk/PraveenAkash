import { Container } from "react-bootstrap";
import "../assets/stylesheets/components/Footer.scss"

let Footer = () => {

    return (
        <div className="footer-main">
            <Container>
                <div className="footer-wrap text-center">
                    &copy; 2024 All rights reserved.
                </div>
            </Container>
        </div>
    )

}

export default Footer;