import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/Layout'

export default function BlogPostTemplate({ data }: any) {
    // this prop will be injected by the GraphQL query below.
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <div>
                <div>
                    <h1>{frontmatter.title}</h1>
                    <h2>
                        {frontmatter.author} on {frontmatter.date}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <Link to={'/blog'} style={{ color: 'black' }}>
                        Go back
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($title: String) {
        markdownRemark(frontmatter: { title: { eq: $title } }) {
            html
            id
            frontmatter {
                title
                date(formatString: "YYYY/MM/DD/")
                featuredpost
                tags
            }
        }
    }
`