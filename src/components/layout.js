import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
    <>
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
