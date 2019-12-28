// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { AppBar, Toolbar } from '@material-ui/core'

// Data
import pages from 'constants/pages'

const Header = () => (
    <header
        style={{
            marginBottom: `1.45rem`,
        }}
    >
        <AppBar position={'static'} style={{
            backgroundColor: `#f9f4ed`,
        }}>
            <Toolbar style={{
                justifyContent: `center`,
            }}>
                {pages.map(page => (
                    <Link
                        to={page.path}
                        style={{ color: 'black', padding: 10 }}
                        key={page.title}
                    >
                        {page.title}
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
