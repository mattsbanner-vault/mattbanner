/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/templates/page.js`)

    return graphql(
    `
      query PagesQuery {
        pages: allCraftPagesPagesEntry {
          nodes {
            uri
            remoteId
            slug
          }
        }
      }
    `,
    { limit: 1000 }
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const pages = result.data.pages.nodes

        pages.forEach(post => {
            createPage({
                path: `/${post.uri}`,
                component: pageTemplate,
                context: {
                    slug: post.slug,
                },
            })
        })
    })
}
