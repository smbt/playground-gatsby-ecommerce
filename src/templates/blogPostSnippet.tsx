import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }: any) { // this prop will be injected by the GraphQL query below.
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.author} on {frontmatter.date}</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`