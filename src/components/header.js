// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Box, Typography } from '@material-ui/core'

const Header = ({siteTitle}) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        <Box
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <Typography variant={'h4'} component={'h1'} style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </Typography>
        </Box>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
