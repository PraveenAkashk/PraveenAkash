import { Container } from "react-bootstrap"
import "../assets/stylesheets/components/Professionalinfo.scss"

let Professionalinfo = () => {

    return (
        <div className="professional-main">
            <Container>
                <h2>Professional Experience</h2>
                <div className="professional-wrap">
                    <div className="company-info">
                        <div className="company-head">
                            <div>
                                <h4>Front End Developer</h4>
                                <h6>Aximsoft, Tamil Nadu, India</h6>
                            </div>
                            <div>
                                <h6>October, 2021 - August, 2024</h6>
                            </div>

                        </div>
                        <ul className="work-list">
                            <li>Developed responsive, optimized static and corporate websites using HTML, SCSS, JavaScript, and jQuery for Aximsoft, collaborating with design teams for user-friendly interfaces.</li>
                            <li>Translated design mockups into pixel-perfect, interactive webpages with SCSS and JavaScript animations, employing scalable styling techniques for Finisswim.</li>
                            <li>Built WordPress websites and dynamic JavaScript components for AutoGrid, providing maintenance to keep sites secure and up-to-date.</li>
                            <li>Created modular, reusable React components for Rallio, implementing responsive designs and API data fetching for dynamic, accessible applications.</li>
                        </ul>
                    </div>
                    <div className="company-info">
                        <div className="company-head">
                            <div>
                                <h4>UI Developer</h4>
                                <h6>Ducont systems, Tamil Nadu, India</h6>
                            </div>
                            <div>
                                <h6>August, 2024 - Present</h6>
                            </div>

                        </div>
                        <ul className="work-list">
                            <li>Developed responsive, optimized static and corporate websites using HTML, SCSS, JavaScript, and jQuery for Aximsoft, collaborating with design teams for user-friendly interfaces.</li>
                            <li>Translated design mockups into pixel-perfect, interactive webpages with SCSS and JavaScript animations, employing scalable styling techniques for Finisswim.</li>
                            <li>Built WordPress websites and dynamic JavaScript components for AutoGrid, providing maintenance to keep sites secure and up-to-date.</li>
                            <li>Created modular, reusable React components for Rallio, implementing responsive designs and API data fetching for dynamic, accessible applications.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Professionalinfo