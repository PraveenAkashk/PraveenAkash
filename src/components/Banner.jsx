import { Button, Container } from "react-bootstrap"
import "../assets/stylesheets/components/Banner.scss"
let Banner = () => {
    let Token = "1w_J789o6twGzmSrQQuj339NnOZli97mO"
    let GDriveLink = `https://drive.google.com/file/d/${Token}/view?usp=sharing`

    return (
        <div className="banner-wrap">
            <Container>
                <div className="banner-main">
                    <h2>Praveen akash k</h2>
                    <p>I'm Front End Developer</p>
                    <a href={GDriveLink} target="_blank">Download CV</a>
                </div>
            </Container>
        </div>
    )
}

export default Banner