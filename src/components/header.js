// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'

const Header = ({siteTitle}) => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        {/*<Box*/}
        {/*    style={{*/}
        {/*        margin: `0 auto`,*/}
        {/*        maxWidth: 960,*/}
        {/*        padding: `1.45rem 1.0875rem`,*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Typography variant={'h4'} component={'h1'} style={{margin: 0}}>*/}
        {/*        <Link*/}
        {/*            to="/"*/}
        {/*            style={{*/}
        {/*                color: `white`,*/}
        {/*                textDecoration: `none`,*/}
        {/*            }}*/}
        {/*        >*/}
        {/*        </Link>*/}
        {/*    </Typography>*/}
        {/*</Box>*/}
        <AppBar position={'static'}>
            <Toolbar>
                <Typography variant={'h6'} component={'h1'} style={{flexGrow: 1}}>{siteTitle}</Typography>
                <Button color={'inherit'} onClick={() => navigate('/')}>home</Button>
                <Button color={'inherit'} onClick={() => navigate('/contact')}>contact</Button>
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
