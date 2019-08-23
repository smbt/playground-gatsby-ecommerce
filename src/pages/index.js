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
    <div style={ { display: 'flex' } }>
      {
        data.allStripeSku.edges.map(sku => <Sku sku={ sku.node } key={ sku.node.id }/>)
      }
    </div>
  </Layout>

}
export default IndexPage
