import Siteheader from './components/Siteheader'
import Banner from './components/Banner'
import Aboutsection from './components/About'
import Skillscomponent from './components/Skillscomponent'
import Professionalinfo from './components/Professionalinfo'
import Projects from "./components/Projects"
import './App.scss'

function App() {

  return (
    <>
      <Siteheader/>
      <Banner/>
      <Aboutsection/>
      <Skillscomponent/>
      <Professionalinfo/>
      <Projects/>
    </>
  )
}

export default App
