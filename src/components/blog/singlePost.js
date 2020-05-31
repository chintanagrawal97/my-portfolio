import React from "react"
import { graphql } from "gatsby"

import { Container } from "./Container"
import {Post} from './Post'


const singlePost = ({ data }) => {
  
    return (
      <Container>
        <Post>
         
         {data.mdx.body}
        </Post>
      </Container>
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
  