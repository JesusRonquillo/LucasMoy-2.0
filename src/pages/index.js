import * as React from "react"
import Header from "../components/Home/Header"
import Hero from "../components/Home/hero"
import About from "../components/Home/about_us"
import Why_us from "../components/Home/why_us"
import Skills from "../components/Home/skills"
import Services_sec from "../components/Home/Services_sec"
import Cta from "../components/Home/cta"
import Portafolio from "../components/Home/portafolio"
import End_Team from "../components/Home/end_Team"
import Pricing from "../components/Home/pricing"
import Frequent_quest from "../components/Home/frequent_quest"
import Contact from "../components/Home/contact"
import Footer from "../components/Home/footer"
import Seo from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  <div>
  <Header />
  <Hero />
  <About />
  <Why_us />
  <Skills />
  <Services_sec />
  <Cta />
  <Portafolio />
  <End_Team />
  <Pricing />
  <Frequent_quest />
  <Contact />
  <Footer />

  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage