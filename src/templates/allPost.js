import React from "react"
import { graphql } from "gatsby"

import { ContentCard } from "../components/ContentCard"
import { Pagination } from "../components/Pagination"
import Layout from "../components/Layout"


import {Card,Button} from "react-bootstrap"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges


  return (
    <Layout>
        {posts.map(post => (
                    <ContentCard
                    key={post.node.frontmatter.slug}
                    date={post.node.frontmatter.date}
                    title={post.node.frontmatter.title}
                    excerpt={post.node.frontmatter.excerpt}
                    slug={post.node.frontmatter.slug}
                    />
                ))}

    
     <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    


    </Layout>
    
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`
