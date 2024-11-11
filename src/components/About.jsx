import { useRef, forwardRef } from 'react';
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutImage from "../assets/img/about-image.jpg"
import "../assets/stylesheets/components/About.scss"

let Aboutsection = () => {
    var dob = new Date("07/26/1999")
    let currentYear = new Date()
    let Birthyear = currentYear.getFullYear() - dob.getFullYear();
    return (
        <section className="about-section">
            <Container>
                <div className="about-wrap">
                    <h2>About</h2>
                    <p>Highly skilled and dedicated Frontend Developer with a passion for creating
                        visually appealing and user-friendly web applications. Seeking a challenging
                        position in a progressive organization where I can utilize my technical
                        expertise and creative problem-solving skills to contribute to the
                        development of cutting-edge web solutions.</p>

                    <div className="about-info">
                        <Row>
                            <Col lg={4}>
                                <div className="image-wrap">
                                    <img src={AboutImage} alt="About" />
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="about-content">
                                    <h3>Web Developer / Software Engineer</h3>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="data-info">
                                                <div className="data-hldr">Birthday</div>
                                                <div className="data-value">26/07/1999</div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">Website</div>
                                                <div className="data-value">
                                                    <a href="https://praveenakashk26.netlify.app/">Praveen Akash K</a>
                                                </div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">Phone</div>
                                                <div className="data-value"><a href="tel:9500691394">9500691394</a></div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">City</div>
                                                <div className="data-value">Coimbatore</div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">Age</div>
                                                <div className="data-value">{Birthyear}</div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">Degree</div>
                                                <div className="data-value">
                                                    B.E (ECE)
                                                </div>
                                            </div>
                                            <div className="data-info">
                                                <div className="data-hldr">Email</div>
                                                <div className="data-value"><a href="email:praveenakdhiravan52853@gmail.com">praveenakdhiravan52853@gmail.com</a></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default Aboutsection