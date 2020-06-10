import React from 'react'
import {Helmet} from 'react-helmet'
import Header from './Header'
import Footer from "./footer"

const Layout = ({ children }) => (
    <>
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Chintan Agrawal",
          "email": "chintanagrawal2174@gmail.com",
          "image": "https://drive.google.com/uc?id=1DWBWax_DJCH-oetqBRxYzWGul2ZDcTak",
          "url": "http://jibin.tech",
          "jobTitle": "Big Data Engineer",
          "gender": "http://schema.org/Male",
          "sameAs": [
            "https://github.com/chintanagrawal97/",
            "https://www.linkedin.com/in/chintan-agrawal-87a866135/",     
          ]
        }`,
        }}
      />
    </Helmet>
    <Header />
    <div
      style={{
        padding: '0 0.75rem',
      }}
    >
      <div>{children}</div>
    </div>
    <Footer />
    </>
  
)

export default Layout
