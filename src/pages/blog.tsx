// Node modules
import React from 'react'
import { graphql } from 'gatsby'
import { Card } from '@material-ui/core'

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

    console.log('blogPosts:', blogPosts)

    return (
        <Layout>
            <h1>Blog</h1>
            <div>
                {blogPosts.map(blogPost => (
                    <Card
                        style={{
                            paddingBottom: 30,
                            paddingLeft: 30,
                            paddingRight: 30,
                            paddingTop: 0,
                            margin: 50,
                            backgroundColor: '#fdfdfd',
                        }}
                    >
                        <BlogPostSnippet
                            blogPost={blogPost}
                            key={blogPost.frontmatter.title}
                        />
                    </Card>
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
