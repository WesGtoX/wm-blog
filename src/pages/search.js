import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from "../components/search"

const SearchPage = () => (
  <Layout>
    <Search />
  </Layout>
)

export const Head = () => <Seo title="Search" />

export default SearchPage
