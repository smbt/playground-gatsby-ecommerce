import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"

const SuccessPage = () => (
  <Layout>
    Thanks for shopping!
    <br/>
    <Link to={'/'}>Go home</Link>
  </Layout>
)

export default SuccessPage
