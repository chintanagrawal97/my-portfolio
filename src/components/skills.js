import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
// import styles from "./Skills.module.scss";
import {Container,Row,Col} from "react-bootstrap"
import PostGrid from "./Postgrid"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import QueryImage from './QueryImage'

import athena from "../images/amazon-athena.png"; 
import dynamodb from "../images/amazon-dynamodb.png"; 
import emr from "../images/amazon-emr.png"; 
import etl from "../images/etl.png"; 
import redshift from "../images/amazon-redshift.png"
import aws from "../images/amazon-web-service.png"
import spring from '../images/spring.png'
import hadoop from "../images/apache-hadoop.jpg"
import hive from "../images/apache-hive.png"; 
import spark from "../images/apache-spark.png"
import bash from "../images/bash.png"
import mysql from "../images/mysql.png"; 
import presto from "../images/facebook-presto.png"; 
import gatsby from "../images/Gatsby.jpeg"; 
import java from "../images/Java.png";
import javascript from '../images/javaScript.png';
import postgres from "../images/postgres.png"
import python from '../images/python.png';
import react_image from '../images/React.png';

import developer from "../images/guy-working.jpg"
import SkillStyle from "../pages/index.module.scss"


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
  <section className="skills">
  
    <div className="container">

      
      <div class="row">
          
          <div class="d-none d-lg-block d-md-block col-lg-1 col-md- text-center my-auto">
                
          </div>
       
       
        <div class="offset-md-1 offset-lg-1 col-lg-8 col-md-8">

                <div class="row">       
             
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={aws} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={athena} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={emr} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={etl} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={hive} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={spark} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={redshift} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={dynamodb} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={hadoop} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={presto} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                  <img  src={gatsby} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">
                                  <img  src={java} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={javascript} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={python} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={bash} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={mysql} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={postgres} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={react_image} alt="logo"width={75} height={75}  />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-3">                  <img  src={spring} alt="logo"width={75} height={75}  />
              </div>
            </div>
          </div>

        

    </div>



   



    </div>
      
          

           {/* <Col >  <img  src={hive} alt="logo" width={75} height={75} />  </Col>
           <Col >  <img  src={athena} alt="logo" width={75} height={75}  />  </Col>
           <Col >  <img  src={dynamodb} alt="logo"width={75} height={75}  />  </Col>
           <Col >  <img  src={emr} alt="logo" width={75} height={75}  />  </Col>
           <Col >  <img  src={glue} alt="logo" width={75} height={75}  />  </Col>
           <Col >  <img  src={python} alt="logo"width={75} height={75}  />  </Col>
           <Col >  <img  src={javascript} alt="logo" width={75} height={75}  />  </Col>
           <Col >  <img  src={java} alt="logo" width={75} height={75}  />  </Col>
           <Col >  <img  src={gatsby} alt="logo" width={75} height={75} />  </Col>
           <Col >  <img  src={react_image} alt="logo" width={75} height={75}  />  </Col> */}
  </section>
  
)}

export default Skills;

