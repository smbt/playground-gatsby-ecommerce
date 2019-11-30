// Node modules
import React from 'react'
import { graphql } from 'gatsby'
import { Card } from '@material-ui/core'

// Components
import Layout from 'components/Layout'
import BlogPostSnippet from 'components/BlogPostSnippet'
import { BlogPost } from 'types/BlogPost'

export default ({ data: { allMarkdownRemark: { edges } } }: any) => {


    const blogPosts: BlogPost[] = edges.map((edge: any) => edge.node)

    console.log('blogPosts:', blogPosts)

    return (
        <Layout>
            <h1>Blog</h1>
            <div>
                {
                    blogPosts.map(blogPost =>
                        <Card style={{ margin: 50, padding: 50, backgroundColor: '#eee' }}>
                            <BlogPostSnippet
                                blogPost={blogPost}
                                key={blogPost.frontmatter.title}
                            />
                        </Card>,
                    )
                }
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
            frontmatter {
              title
              date
              author
              path
            }
          }
        }
      }
    }
`
