// Node modules
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Grid, Box, Link } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import BackgroundImage from 'gatsby-background-image'

// Components
import Layout from 'components/Layout'
import Sku from 'components/Sku'

// Types
import { Sku as SkuType } from 'types/stripe/Sku'

// Data
export const data = graphql`
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
        backgroundImage: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

interface Props {
    data: any
}

export default (props: Props) => {
    useEffect(() => {
        // @ts-ignore
        if (window.netlifyIdentity) {
            // @ts-ignore
            window.netlifyIdentity.on('init', (user: any) => {
                if (!user) {
                    // @ts-ignore
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/'
                    })
                }
            })
        }
    })

    useEffect(() => {
        console.log('####')
        console.log(props)
    })
    return (
        <>
            <Helmet>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
            </Helmet>
            <BackgroundImage
    fluid={props.data.backgroundImage.childImageSharp.fluid}
    style={{ width: '100%', height: 400 }}
    />
            <Layout>
                <h1>Ecommerce Prototype</h1>

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
        </>
    )
}
