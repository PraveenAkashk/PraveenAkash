import Aboutsection from "./About"
import Banner from "./Banner"
import Contact from "./Contact"
import Footer from "./Footer"
import Professionalinfo from "./Professionalinfo"
import Projects from "./Projects"
import Skillscomponent from "./Skillscomponent"

let Layout=()=>{

    return(
        <div>
            <Banner/>
            <Aboutsection/>
            <Skillscomponent/>
            <Professionalinfo/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )

}

export default Layout