// Libraries
import React from 'react'
import { graphql } from 'gatsby'
import { Grid, Box, Typography, Link } from '@material-ui/core'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Sku from '../components/sku'

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

const IndexPage = ({data}) => {

    return <Layout>
        <SEO title="Home"/>
        <Box>
            <Typography varian={'body1'}>
                Welcome to smbt´s{' '}
                <Link href={'https://github.com/smbt/playground-gatsby-ecommerce'}
                   target={'_blank'}>
                    playground-gatsby-ecommerce
                </Link>
                .
            </Typography>

        </Box>
        <Box>
            <h3>Check out our{' '}
                <Link href={'https://dashboard.stripe.com'} target={'_blank'}>
                    stripe
                </Link>
                {' '}powered products:
            </h3>
            <Grid
                container
                spacing={2}
                justify={'center'}
            >
                {
                    data.allStripeSku.edges.map(sku => <Sku sku={sku.node} key={sku.node.id}/>)
                }
            </Grid>
        </Box>
    </Layout>

}
export default IndexPage
