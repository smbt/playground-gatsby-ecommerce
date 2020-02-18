// Node modules
import React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from 'components/Layout'
import BlogPostSnippet from 'components/BlogPostSnippet'
import { BlogPost } from 'types/BlogPost'

export default ({
                    data: {
                        allMarkdownRemark: { edges },
                    },
                }: any) => {
    const blogPosts: BlogPost[] = edges.map((edge: any) => edge.node)

    return (
        <Layout>
            <h1>Blog</h1>
            <div>
                {blogPosts.map(blogPost => (
                    <BlogPostSnippet
                        blogPost={blogPost}
                        key={blogPost.frontmatter.title}
                    />
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    html
                    id
                    excerpt
                    frontmatter {
                        title
                        date(formatString: "YYYY/MM/DD")
                        featuredpost
                        tags
                    }
                }
            }
        }
    }
`
