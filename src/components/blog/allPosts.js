import React from "react"
import { graphql } from "gatsby"
import {Container} from './Container'
import {Content} from './Content'
import {ContentCard} from './ContentCards'
import {Pagination} from './Pagination'
import Layout from "../Layout"


const allPosts = ({ pageContext, data }) => {
  console.log("Hello")
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  console.log(posts)

  return (
    <Layout>
   <p>Hello</p>
  

      

      <Content>
        <h1 textAlign="center" margin="0 0 1rem 0">
          Elit rhoncus tellus proin parturient.
        </h1>
        <p color="dark2" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci,
          orci in congue cursus nulla tincidunt facilisi.
        </p>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
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
