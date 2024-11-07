import { Col, Container, Row } from "react-bootstrap"
import HtmlLogo from "../assets/img/html-5-logo.svg"
import CssLogo from "../assets/img/css-3-logo.svg"
import ScssLogo from "../assets/img/sass-logo.svg"
import bootstrapLogo from "../assets/img/Bootstrap-logo.svg"
import javascriptLogo from "../assets/img/javascript-logo.svg"
import JqueryLogo from "../assets/img/jquery-logo.svg"
import ReactLogo from "../assets/img/react-logo.svg"
import TSLogo from "../assets/img/typescript-logo.svg"
import ReduxLogo from "../assets/img/redux-logo.svg"
import FigmaLogo from "../assets/img/figma-logo.svg"
import "../assets/stylesheets/components/Skills.scss"


let Skillscomponent = () => {
    let skillsLogo = [HtmlLogo, CssLogo, ScssLogo, bootstrapLogo, javascriptLogo, JqueryLogo, ReactLogo, TSLogo, ReduxLogo, FigmaLogo]
    return (
        <>
            <section className="skills-section">
                <Container>
                    <div className="skills-wrap">
                        <h2 className="text-center">Skills</h2>
                        <div className="skills-list">
                            <Row className="justify-content-center">
                                {skillsLogo.map((value, index) => {
                                    return (
                                        <Col key={index} xs={12} md={3} className="text-center">
                                            <div className="skills-card">
                                                <img src={value} alt="skills-logo" />
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Skillscomponent