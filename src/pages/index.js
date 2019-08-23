// Libraries
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sku from "../components/sku"

// Data
export const allStripeSku = graphql`
{
  allStripeSku {
    edges {
      node {
        id
        currency
        price
        attributes {
          name
        }
        image
        localFiles {
          childImageSharp {
            fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = ({ data }) => {

  return <Layout>
    <SEO title="Home"/>
    <p>Welcome to playground-gatsby-ecommerce.</p>
    {
      data.allStripeSku.edges.map(sku => <Sku sku={ sku.node }/>)
    }
  </Layout>

}
export default IndexPage
