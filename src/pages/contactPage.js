import React from 'react'

import Layout from "../components/layout"
import Styling from './index.module.scss'
import {Container} from 'react-bootstrap'
import '../styles/contact.scss'
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
            <ContactForm />



    </Container>
            
        
      
    
    </p>
    </Layout>
)

function ContactForm() {
    return (
      <form
        className="contact-form"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          <span className="contact-form__label">Full Name</span>
          <input type="text" name="name" required />
        </label>
  
        <label>
          <span className="contact-form__label">Email Address</span>
          <input type="email" name="email" required />
        </label>
  
        <label>
          <span className="contact-form__label">Message</span>
          <textarea row="20" cols="50" name="message" required />
        </label>
  
        <button className="btn btn--hover">SUBMIT</button>
      </form>
    )
  }
    


export default ContactPage