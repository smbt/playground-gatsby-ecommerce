// Libraries
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const Footer = () => (
    <Box
        p={2}
        style={{
            position: 'relative',
            bottom: '0px',
            backgroundColor: '#eee',
            borderTop: '1px solid #ddd',
        }}
    >
        <Link
            href={'https://github.com/smbt/playground-gatsby-ecommerce'}
            target={'_blank'}
            style={{ marginRight: 10 }}
        >
            Github
        </Link>
        <GatsbyLink to={'/admin/#/'}>admin</GatsbyLink>
    </Box>
)

export default Footer
