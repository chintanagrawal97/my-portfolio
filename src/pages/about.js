import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Layout from "../components/layout"
import Skills from "../components/skills"
import QueryImage from '../components/QueryImage'
import homeContact from "../components/Home/Contact"
 
const AboutPage = () => {
    const data = useStaticQuery(graphql`
    {
       
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);
  

    return (
        <Layout >
            <h1>About Me</h1>
            
        <section className="skills">
            <div className="container">
                <div class="row">

                        <div width ={30} >
                        <QueryImage name="chintan" width={200} />
                        </div>

                        <div width ={70}>
                                <div 
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                                />               
                        </div>
                </div>
            </div>
        </section>
           
            <Skills></Skills>
            <homeContact></homeContact>
        </Layout>    
    )
}

export default AboutPage