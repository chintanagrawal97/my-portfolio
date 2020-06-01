import React from "react"
import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import MDXContent from "../components/MDXContent"
import "./language-tabs.css"

const singlePost = ({ data }) => {

  return (
        <div>
            <Layout>
              <h1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</h1>
              <MDXContent>{data.mdx.body}</MDXContent>
            </Layout>
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
      }
    }
  }
`
