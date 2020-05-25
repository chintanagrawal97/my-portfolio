import React from 'react'

import {Header} from '../NewHeader'
import Footer from '../footer'

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className="Page-Layout">
             <Header />
            <div className={layoutStyles.container}>
   
                <div className={layoutStyles.content}>     
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default Layout