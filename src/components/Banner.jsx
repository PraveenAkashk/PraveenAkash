import { Button, Container } from "react-bootstrap"
import "../assets/stylesheets/components/Banner.scss"
let Banner=()=>{

    return(
        <div className="banner-wrap">
            <Container>
                <div className="banner-main">
                    <h2>Praveen akash k</h2>
                    <p>I'm Front End Developer</p>
                    <a href="https://drive.google.com/file/d/1CTZQMxj66G89ZqRmKrWQLGA9bNOJwa_T/view?usp=sharing" target="_blank">Download CV</a>
                </div>
            </Container>
        </div>
    )
}

export default Banner