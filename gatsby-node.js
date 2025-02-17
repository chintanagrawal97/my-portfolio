// const path = require('path')
// exports.createPages = async function ({ actions, graphql }) {
    
//     const blogListTemplate = path.resolve(`./src/templates/allPost.js`)
//     const blogPostTemplate = path.resolve(`./src/templates/singlePost.js`)
    
//     const { data } = await graphql(`
//       query {
//         allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//           edges {
//             node {
//               frontmatter {
//                 slug
//               }
//               id
//             }
//           }
//         }
//       }
//     `)
//     // Create paginated pages for posts
  
//     const postPerPage = 3

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)


//     console.log(data.allMdx)
//     console.log("Hello")
    
//     Array.from({ length: numPages }).forEach((_, i) => {
//         actions.createPage({
//           path: i === 0 ? `/blog` : `/blog/${i+1}` ,
//           component: blogListTemplate ,
//           context: {
//             limit: postPerPage,
//             skip: i * postPerPage,
//             numPages,
//             currentPage: i + 1,
//           },
//         })
//       })
    
//     // Create single blog posts

//     data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPage({
//       path: `/blog/${slug}`,
//       component: blogPostTemplate,
//       context: { id },
//     })
//   })
// }
const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  return graphql(`
  {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex:"/content/blog/"}}) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMdx.edges

    createBlogPages(posts, createPage)
    createTagPages(posts, createPage)
    createRedirectFile(createRedirect)
  })
}

function createBlogPages(posts, createPage) {
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogPostTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        previous,
        next,
      },
    })
    return posts
  })
}

function createTagPages(posts, createPage) {
  const tagTemplate = path.resolve(`./src/templates/tagsTemplate.js`)

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}

function createRedirectFile(createRedirect) {
  createRedirect({
    fromPath: 'https://blog.jibin.tech/',
    toPath: 'https://jibin.tech/blog',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.jibin.tech/contact/',
    toPath: 'https://jibin.tech/contact/',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.jibin.tech/tags/',
    toPath: 'https://jibin.tech/tags/',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.jibin.tech/*',
    toPath: 'https://jibin.tech/:splat',
    isPermanent: true,
    force: true,
  })
}