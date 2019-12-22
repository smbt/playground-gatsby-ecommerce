// Libraries
import React from 'react'
import { Box, Link } from '@material-ui/core'

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
        >
            Github
        </Link>
    </Box>
)

export default Footer
