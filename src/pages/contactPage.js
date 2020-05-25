import React from 'react'

import Layout from "../components/layout"
import Styling from './index.module.scss'
import {Container} from 'react-bootstrap'

const ContactPage = () => (
    
    <Layout activePage="contact">
   
   <p>
       
    
    <Container className={Styling.homeContainer}>
          
            <div className={Styling.homeContainerContent}>
              
            The best way to reach me is via <a href="https://www.linkedin.com/in/chintan-agrawal-87a866135/" target="_blank">Chintan Agrawal </a> on Linkedin or via  <a
           href="mailto:chintanagrawal2174@gmail.com" rel="nofollow noopener noreferrer">
           mail ! </a> 

            </div>
            <div className={Styling.contactContainerContent}>
           
            I'll happily provide consultation on the architecture of AWS services (mainly around BigData), speak at your event, or provide mentorship for your open source projects. Feel free to email me with details!

            </div>

    </Container>
            
        
      
    
    </p>
    </Layout>
)
   
       
    


export default ContactPage