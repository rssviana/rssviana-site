import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hall" />
    <Link to="/contacts/">Go to Contacts -> </Link>
  </Layout>
)

export default IndexPage