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
            <div>
                <h1>Amazing Pandas Eating Things</h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map((edge: any) => (
                    <div key={edge.node.id}>
                        <h3>
                            {edge.node.frontmatter.title}{' '}
                            <span>— {edge.node.frontmatter.date}</span>
                        </h3>
                        <p>{edge.node.excerpt}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`
