import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import TimelineLayout from "../components/timelinelayout"

const Cara = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={1} />
      <TimelineLayout offset={2} factor={2}/>
      <Projects offset={4} factor={2} />
      <Skills offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
