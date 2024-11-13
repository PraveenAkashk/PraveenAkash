import Siteheader from './components/Siteheader'
import { Themecontext, ThemeProvider } from "./context/Themecontext"
import "./assets/stylesheets/components/Responsive.scss"
import './App.scss'
import "./assets/stylesheets/components/theme/Theme.scss"
import Layout from './components/Layout'
import { useContext, useState } from 'react'

function App() {

  return (
    <>
    <ThemeProvider>
      <Siteheader/>
      <Layout  />
    </ThemeProvider>
    </>
  )
}

export default App
