import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {Post } from "../components/Post"

const singlePost = ({ data }) => {

  const seoImage = data.mdx.frontmatter.featureImage.publicURL

  return (
        <div>
            <Post>
              <h1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</h1>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </div>
          
          
    
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
