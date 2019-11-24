const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const showsTemplate = path.resolve('./src/templates/shows.js')
    const newsTemplate = path.resolve('./src/templates/news.js')
    const res = await graphql(`
        query {
            allContentfulShows {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulNews {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)


    res.data.allContentfulShows.edges.forEach((edge) => {
        createPage({
            component: showsTemplate,
            path: `/shows/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })


    res.data.allContentfulNews.edges.forEach((edge) => {
        createPage({
            component: newsTemplate,
            path: `/news/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    
}