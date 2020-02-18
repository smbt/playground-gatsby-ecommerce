// Node modules
import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Grid, CircularProgress } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import BackgroundImage from 'gatsby-background-image'

// Components
import Layout from 'components/Layout'
import Sku from 'components/Sku'

// Types
import { Sku as SkuType } from 'types/stripe/Sku'
import { Movie } from 'types/Movie'
import MoviePreview from 'components/MoviePreview'

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
        bannerImage: file(relativePath: { eq: "banner.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
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
    const [movieResults, setMovieResults] = useState<Movie[]>([])
    const [search, setSearch] = useState<string>('')

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
        const url: string = 'https://www.omdbapi.com/?apikey=' + process.env.GATSBY_OMDB_API_KEY + '&s=' + search
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovieResults(data.Search)
            })
    }, [search])


    return (
        <>
            <Helmet>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
            </Helmet>
            <BackgroundImage
                fluid={props.data.bannerImage.childImageSharp.fluid}
                style={{ width: '100%', height: 400 }}
            />
            <Layout>
                <h1>eCommerce Prototype</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus harum ipsam magnam qui soluta
                voluptates. Distinctio dolorem harum, modi nobis optio repellat sequi? Accusamus adipisci aliquam
                assumenda debitis enim in laborum mollitia nam! Assumenda culpa cupiditate, ea et impedit ipsa iure
                magnam maxime nemo neque nesciunt nobis provident, repudiandae!
                <h2>Take a look at the books we have in stock</h2>
                <p style={{ textAlign: 'center' }}>
                    Book data is stored at Stripe, was queried during build time and statically built into this site.
                </p>
                <div>
                    <Grid container spacing={2} justify={'center'}>
                        {props.data.allStripeSku.edges.map(
                            (edge: { node: SkuType }) => (
                                <Sku sku={edge.node} key={edge.node.id}/>
                            ),
                        )}
                    </Grid>
                </div>
                <div style={{ marginTop: 50 }}>
                    <h2>Not a fan of books? Use our live search to find interesting movies to watch</h2>
                    <p style={{ textAlign: 'center' }}>
                        The media data in this section is dynamically pulled at runtime from <a
                        href="www.omdbapi.com">www.omdbapi.com</a>.
                    </p>
                    <div style={{ textAlign: 'center', marginBottom: 50 }}>
                        <input
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                            style={{
                                marginTop: 50,
                                marginBottom: 50,
                                padding: 10,
                                width: 200,
                            }}
                            placeholder={'type a movie title'}
                        />
                        <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                            {
                                movieResults ?
                                    movieResults.map((movie: Movie) => {
                                        return <MoviePreview movie={movie}/>
                                    })
                                    : search
                                    ? <CircularProgress/>
                                    : null
                            }
                        </Grid>
                    </div>
                </div>
            </Layout>
        </>
    )
}
