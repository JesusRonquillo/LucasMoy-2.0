import * as React from "react"
import Header from "../components/Py_course/header"
import Main from "../components/Py_course/main"
import Footer from "../components/Py_course/footer"

import Seo from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
    <div>
    <Header />
    <Main />
    <Footer />
    
    </div>
  )
  
  export const Head = () => <Seo title="Home" />
  
  export default IndexPage
  