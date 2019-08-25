// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'

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
                <Button color={'inherit'} onClick={() => navigate('/')}>
                    home
                </Button>
                <Button color={'inherit'} onClick={() => navigate('/contact')}>
                    contact
                </Button>
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
