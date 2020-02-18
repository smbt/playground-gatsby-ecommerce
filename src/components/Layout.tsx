// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@material-ui/core'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// Styles
import 'styles/root.css'

interface Props {
    children: Array<JSX.Element | string> | (JSX.Element | string)
    footerPosition?: 'absolute' | 'relative'
}

const Layout = (props: Props) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{props.children}</main>
            </Box>
            <Footer position={props.footerPosition} />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
