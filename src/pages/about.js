import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About Page</h1>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Sobre mim"
    description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
  />
)

export default AboutPage
