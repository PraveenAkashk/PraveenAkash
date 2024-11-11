import { Col, Container, Row } from "react-bootstrap"
import aximlogo from "../assets/img/axim-logo.svg"
import Autogridlogo from "../assets/img/autogrid-logo.svg"
import AutogridFlexsaverlogo from "../assets/img/autogrid-flexsaver-logo.svg"
import Finislogo from "../assets/img/Finis-logo.svg"
import Ralliologo from "../assets/img/rallio-logo.svg"
import FSMGloballogo from "../assets/img/fsm-logo.svg"
import Secuvylogo from "../assets/img/secuvy-logo.svg"
import "../assets/stylesheets/components/Portfolio.scss"

let Projects = () => {
    let portfolioData=[{
        siteLink:"https://aximsoft.com/",
        ImagePath:aximlogo,
        AltText:"Axim-logo"
    },
    {
        siteLink:"https://www.auto-grid.com/",
        ImagePath:Autogridlogo,
        AltText:"Autogrid-logo"
    },
    {
        siteLink:"https://autogridflexsaver.net/",
        ImagePath:AutogridFlexsaverlogo,
        AltText:"AutogridFlexsaver-logo"
    },
    {
        siteLink:"https://www.finisswim.com/",
        ImagePath:Finislogo,
        AltText:"Finis-logo"
    },
    {
        siteLink:"https://app.rall.io/",
        ImagePath:Ralliologo,
        AltText:"Rallio-logo"
    },
    {
        siteLink:"https://secuvy.ai/",
        ImagePath:Secuvylogo,
        AltText:"secuvt-logo"
    },
    {
        siteLink:"https://fsmglobal.com/",
        ImagePath:FSMGloballogo,
        AltText:"FSMGlobal-logo"
    }]
    let portfoliolist = [aximlogo, Autogridlogo, AutogridFlexsaverlogo, Finislogo, Ralliologo, FSMGloballogo, Secuvylogo]



    console.log("portfoliolist", portfoliolist)

    return (
        <div className="Portfilio-main">
            <Container>
                <div className="Portfilio-wrap">
                    <h2>Prosessional Projects</h2>

                    <div className="project-info">
                        <Row className="justify-content-center">
                            {
                                portfolioData.map((data, index) => {
                                    return (
                                        <Col key={index} xs={12} md={4} className="text-center">
                                            <div className="project-card">
                                                <img src={data.ImagePath} alt={data.AltText} />
                                                <div className="read-more">
                                                    <a href={data.siteLink} target="_blank">Read More..</a>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                </div>
            </Container>
        </div>
    )

}

export default Projects