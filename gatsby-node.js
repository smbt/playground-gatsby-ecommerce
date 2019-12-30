/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({
  actions,
  graphql,
  reporter
}) => {
  const {
    createPage
  } = actions

    const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.tsx`)

    const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: 'blog/' + node.frontmatter.title.toLowerCase().split(' ').join('-'),
            component: blogPostTemplate,
            context: {
                title: node.frontmatter.title.toString(),
            }, // additional data can be passed via context
        })
    })
}