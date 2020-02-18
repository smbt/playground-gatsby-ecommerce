// Libraries
import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from 'components/Layout'
import SEO from 'components/Seo'

const contactSuccessPage = () => {
    return (
        <Layout>
            <SEO title={'contact'} />
            Thank you for your message. We will get back to you as soon as
            possible!
            <br />
            <Link to={'/'}>Back home</Link>
        </Layout>
    )
}

export default contactSuccessPage
