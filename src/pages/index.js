import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../templates/portfolio'

function index() {
  return (
      <>
      <Layout>

            <SEO title="Chintan Agrawal — Software Developer and Casual Blogger"
             description="Chintan Agrawal is a Big Data Engineer based in Bangalore, India. You can reach out to him at chintanagrawal2174@gmail.com. "
    />
          <Portfolio />
      </Layout>
      </>
    
  )
}

export default index
