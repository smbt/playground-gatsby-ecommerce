import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/Layout'

const PaymentCanceledPage = () => (
    <Layout footerPosition={'absolute'}>
        Canceled
        <br />
        <Link to={'/'}>Back home</Link>
    </Layout>
)

export default PaymentCanceledPage
