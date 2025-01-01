import Siteheader from './components/Siteheader'
import Layout from './components/Layout'
import { ThemeProvider } from "./context/Themecontext"
import "./assets/stylesheets/components/Responsive.scss"
import './App.scss'
import "./assets/stylesheets/components/theme/Theme.scss"

function App() {

  return (
    <>
      <ThemeProvider>
        <Siteheader />
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App
