// Libraries
import React from 'react'
import { Box, Link } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

type Props = {
    position?: 'relative' | 'absolute'
}

const Footer = (props: Props) => (
    <Box
        p={2}
        style={{
            position: props.position ? props.position : 'relative',
            bottom: '0px',
            // width: '100%',
            backgroundColor: '#eee',
            borderTop: '1px solid #ddd',
        }}
    >
        <Link
            href={'https://github.com/smbt/gatsby-ecommerce-prototpye'}
            target={'_blank'}
            style={{ marginRight: 10 }}
        >
            Github
        </Link>
        <GatsbyLink
            to={'/admin/#/'}
            style={{ marginRight: 10 }}
        >admin</GatsbyLink>
        <GatsbyLink to={'/imprint'}>imprint</GatsbyLink>
    </Box>
)

export default Footer
