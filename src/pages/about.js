import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from "gatsby";
import './portfolio.scss'


const AboutPage = () => {
    const data = useStaticQuery(graphql`
    {
       
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);
  

    return (
        <Layout>
             <main className="portfolio">
                <SEO title="About Me" />
                    <div width ={70}>
                        <div 
                        className="text-justify"
                        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                        />    
                    </div>
            </main>
        </Layout> 
              
 
 
    )
}

export default AboutPage