// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'

// Data
import pages from 'constants/pages'

interface Props {
    siteTitle: string
}

const Header = (props: Props) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        <AppBar position={'static'}>
            <Toolbar>
                <Typography
                    variant={'h6'}
                    component={'h1'}
                    style={{ flexGrow: 1 }}
                >
                    {props.siteTitle}
                </Typography>
                {pages.map(page => (
                    <Button
                        color={'inherit'}
                        onClick={() => navigate(page.path)}
                    >
                        {page.title}
                    </Button>
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
