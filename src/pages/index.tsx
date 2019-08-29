// Libraries
import React from 'react'
import { graphql } from 'gatsby'
import { Grid, Box, Typography, Link } from '@material-ui/core'

// Components
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Sku from 'components/Sku'

// Types
import { Sku as SkuType } from 'types/Sku.interface'

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

interface Props {
    data: any
}

const IndexPage = (props: Props) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Box>
                <Typography variant={'body1'}>
                    Welcome to smbt´s{' '}
                    <Link
                        href={
                            'https://github.com/smbt/playground-gatsby-ecommerce'
                        }
                        target={'_blank'}
                    >
                        playground-gatsby-ecommerce
                    </Link>
                    .
                </Typography>
            </Box>
            <Box>
                <h3>
                    Check out our{' '}
                    <Link
                        href={'https://dashboard.stripe.com'}
                        target={'_blank'}
                    >
                        stripe
                    </Link>{' '}
                    powered products:
                </h3>
                <Grid container spacing={2} justify={'center'}>
                    {props.data.allStripeSku.edges.map(
                        (edge: { node: SkuType }) => (
                            <Sku sku={edge.node} key={edge.node.id} />
                        )
                    )}
                </Grid>
            </Box>
        </Layout>
    )
}
export default IndexPage
