const path = require('path')
exports.createPages = async function ({ actions, graphql }) {
    
    const blogListTemplate = path.resolve(`./src/templates/allPost.js`)
    const blogPostTemplate = path.resolve(`./src/templates/singlePost.js`)
    
    const { data } = await graphql(`
      query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
              }
              id
            }
          }
        }
      }
    `)
    // Create paginated pages for posts
  
    const postPerPage = 3

    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)


    console.log(data.allMdx)
    console.log("Hello")
    
    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
          path: i === 0 ? `/blog` : `/blog/${i+1}` ,
          component: blogListTemplate ,
          context: {
            limit: postPerPage,
            skip: i * postPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    
    // Create single blog posts

    data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { id },
    })
  })
}
  