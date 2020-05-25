import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Skills = () => {
  const data = useStaticQuery(graphql`
  {
    allSkillsJson {
      edges {
        node {
          id
          name
          tech
          icon {
            childImageSharp {
              fixed(width: 20, height: 20) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`);
return (
  <section id="skills">

    <div className="container">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
                <div class="row">
                
                    <div class="d-none d-lg-block d-md-block col-lg-1 col-md- text-center my-auto"/>
                        
                

                    <div class="offset-md-1 offset-lg-1 col-lg-8 col-md-8">
                        
                        <div class="row"> 
                                {
                                    data.allSkillsJson.edges.map(({ node }, index) => (
                                            
                                            <div class="col-lg-3 col-md-3 col-sm-3 col-3" >
                                                
                                               
                                               Hello
                                            </div>      
                                                ))
                                }
                        </div>
                    </div>
                       
            </div>                       
                          
                                
                         
                        
                        
                        
                        
                        
                      
            </div>

    </div>
   
  </section>
);
}



export default Skills;
