import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../styles/base"

const AboutPage = () => (
  <Layout>
    <MainContent>
      <h1>Sobre mim</h1>
      <p>Meu nome é Wesley de Oliveira Mendes, nasci em Sertãozinho/SP.</p>

      <p></p>

      <p></p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />
    </MainContent>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Sobre mim"
    description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
  />
)

export default AboutPage
