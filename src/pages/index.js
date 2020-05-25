import React from 'react'
import { Link } from 'gatsby'
import Layout from 'src/components/Layout'
import {Container} from 'react-bootstrap'
import Styling from './index.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faAws,
 
} from "@fortawesome/free-brands-svg-icons";
import "../components/Styles/socialfollow.css";

const IndexPage = () => {
    return (
        <Layout>
            <Container className={Styling.homeContainer}>
            <div className={Styling.homeContainerHeading}> Hi ! </div>
            <div className={Styling.homeContainerContent}>I'm Chintan, a software developer engineer by passion living in Banagalore.
           </div>
               
            <div className="social-container">
                    <ul>
                    <a class="color: #333"
                            href="https://github.com/chintanagrawal97"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a className="social"
                            href="https://www.linkedin.com/in/chintan-agrawal-87a866135/"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                            <FontAwesomeIcon icon={faAws} size="2x" />
                        </a>
                    </ul>
                       
            </div>
                

        

            </Container>
            

           
           
        </Layout>
    )
}

export default IndexPage