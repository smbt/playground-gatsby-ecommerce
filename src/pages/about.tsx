// Node modules
import React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from 'components/Layout'

interface Props {
    data: any
}

export default (props: Props) => {
    const data = props.data
    console.log('data', data)
    return (
        <Layout>
            <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            ></div>
        </Layout>
    )
}

export const query = graphql`
    query {
        markdownRemark(frontmatter: { title: { eq: "About" } }) {
            html
        }
    }
`
