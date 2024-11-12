import { Col, Container, Row } from "react-bootstrap"
import aximlogo from "../assets/img/axim-logo.svg"
import Autogridlogo from "../assets/img/autogrid-logo.svg"
import AutogridFlexsaverlogo from "../assets/img/autogrid-flexsaver-logo.svg"
import Finislogo from "../assets/img/Finis-logo.svg"
import Ralliologo from "../assets/img/rallio-logo.svg"
import FSMGloballogo from "../assets/img/fsm-logo.svg"
import Secuvylogo from "../assets/img/secuvy-logo.svg"
import Linklogo from "../assets/img/link-logo.svg"
import "../assets/stylesheets/components/Portfolio.scss"

let Projects = () => {
    let portfolioData = [{
        siteLink: "https://aximsoft.com/",
        ImagePath: aximlogo,
        AltText: "Axim-logo",
        Title:"Aximsoft",
        Description:"The best of products don't focus on features; they focus on solving problems with clarity!"
    },
    {
        siteLink: "https://www.auto-grid.com/",
        ImagePath: Autogridlogo,
        AltText: "Autogrid-logo",
        Title: "AutoGrid",
        Description:"Building a Resilient and Sustainable Grid with Distributed Energy Resources. Enabling a smarter, cleaner, more distributed electric power grid."
    },
    {
        siteLink: "https://autogridflexsaver.net/",
        ImagePath: AutogridFlexsaverlogo,
        AltText: "AutogridFlexsaver-logo",
        Title:"AutoGrid Flexsaver",
        Description:"Save money on your electricity bills and contribute to your local community's energy sustainability with FlexSaver, a free program by AutoGrid."
    },
    {
        siteLink: "https://www.finisswim.com/",
        ImagePath: Finislogo,
        AltText: "Finis-logo",
        Title:"FINIS",
        Description:"FINIS simplifies swimming through innovation, high-quality products, and a commitment to education."
    },
    {
        siteLink: "https://app.rall.io/",
        ImagePath: Ralliologo,
        AltText: "Rallio-logo",
        Title:"Rallio",
        Description:"Rallio is a social media management platform that helps businesses, content suppliers, and franchisees improve their online presence."
    },
    {
        siteLink: "https://secuvy.ai/",
        ImagePath: Secuvylogo,
        AltText: "secuvy-logo",
        Title:"Secuvy",
        Description:"Secuvy is a leading provider of a Data Intelligence Platform designed to help enterprises manage AI Data Governance, Security Data Protection, Privacy Data Compliance, and Risk Data Assessments."
    },
    {
        siteLink: "https://fsmglobal.com/",
        ImagePath: FSMGloballogo,
        AltText: "FSMGlobal-logo",
        Title:"FSM Global",
        Description:"FSM Global is a company that provides field service management software to help businesses improve their productivity and profitability."
    }]
    let portfoliolist = [aximlogo, Autogridlogo, AutogridFlexsaverlogo, Finislogo, Ralliologo, FSMGloballogo, Secuvylogo]



    console.log("portfoliolist", portfoliolist)

    return (
        <div className="Portfilio-main">
            <Container>
                <div className="Portfilio-wrap">
                    <h2>Prosessional Projects</h2>
                    <div className="project-info">
                        <div className="d-flex justify-content-center flex-wrap project-card-wrap">
                            {
                                portfolioData.map((data, index) => {
                                    return (
                                        <div className="project-card">
                                            <img src={data.ImagePath} alt={data.AltText} />
                                            <div className="read-more">
                                                <div className="read-more-head">
                                                <h5>{data.Title}</h5>
                                                <a href={data.siteLink} target="_blank">
                                                    <img src={Linklogo} alt="link-logo" />
                                                </a>
                                                </div>
                                                <p>{data.Description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )

}

export default Projects