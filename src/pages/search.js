import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from "../components/Search"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const SearchPage = () => (
  <Layout>
    <Search algolia={algolia} />
  </Layout>
)

export const Head = () => <Seo title="Search" />

export default SearchPage
