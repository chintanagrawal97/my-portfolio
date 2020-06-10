import React from 'react'
import Projects from '../components/portfolio/Projects'
import FeaturedPosts from '../components/portfolio/FeaturedPosts'
import Layout from "../components/layout"

function portfolio() {
  return (
      <Layout>
		  
           <main className="portfolio">
		   <Projects />
                <FeaturedPosts />
            </main>
      </Layout>
   
  )
}

export default portfolio
