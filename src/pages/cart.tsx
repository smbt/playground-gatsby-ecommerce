// Libraries
import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { Typography, Container, TextField, Button } from '@material-ui/core'

// Components
import SEO from '../components/Seo'

const CartPage = () => {
    return (
        <>
            <SEO title={'contact'} />
            <Typography variant={'h6'} component={'h2'}>
                Cart
            </Typography>
            <Container maxWidth={'sm'}></Container>
        </>
    )
}

export default CartPage
