// Libraries
import React from 'react'
import { Typography, Container } from '@material-ui/core'

// Components
import SEO from 'components/Seo'
import Layout from 'components/Layout'

const CartPage = () => {
    return (
        <Layout>
            <SEO title={'contact'} />
            <Typography variant={'h6'} component={'h2'}>
                Cart
            </Typography>
            <Container maxWidth={'sm'}></Container>
        </Layout>
    )
}

export default CartPage
