import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ToggleThemeButton from './toggleViewButton'

import './navigation.scss'

function Navigation() {
  const [isSidebarOpen, toggleSidebar] = useState(false)
  useEffect(() => {
    const navbar = document.getElementById('nav-mobile')
    const checkbox = document.getElementById('checkbox1')
    if (isSidebarOpen) {
      navbar.classList.add('tap')
      document.documentElement.style.overflow = 'hidden'
      checkbox.checked = true
    } else {
      navbar.classList.remove('tap')
      document.documentElement.style.overflow = 'auto'
      checkbox.checked = false
    }
  }, [isSidebarOpen])

  return (
    <>
      <nav id="nav-desktop" className="nav">
        <Link className="nav__item" to="/about" activeClassName="nav__item--active">
          About
        </Link>
        <Link className="nav__item" to="/blog" activeClassName="nav__item--active">
          Blog
        </Link>
        <Link className="nav__item" to="/projects" activeClassName="nav__item--active">
          Projects
        </Link>
        <Link className="nav__item" to="/workExperience" activeClassName="nav__item--active">
          Work Experience
        </Link>
        <Link className="nav__item" to="/contact" activeClassName="nav__item--active">
          Contact
        </Link>
        <ToggleThemeButton />
      </nav>

      <input
        type="checkbox"
        id="checkbox1"
        className="checkbox1 visuallyHidden"
        onChange={() => toggleSidebar(!isSidebarOpen)}
      />
      <label htmlFor="checkbox1" aria-labelledby="checkbox1" aria-label="toggle navigation" id="hamburger">
        <div className="hamburger">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
          <span className="bar bar4" />
        </div>
      </label>

      <nav id="nav-mobile">
        <Link className="nav__item" to="/about" activeClassName="nav__item--active">
          About
        </Link>
        <Link className="nav__item" to="/blog" activeClassName="nav__item--active">
          Blog
        </Link>
        <Link className="nav__item" to="/projects" activeClassName="nav__item--active">
          Projects
        </Link>
        <Link className="nav__item" to="/workExperience" activeClassName="nav__item--active">
          Work Experience
        </Link>
        <Link className="nav__item" to="/contact/" activeClassName="nav__item--active">
          Contact
        </Link>
       
        <ToggleThemeButton />
      </nav>
    </>
  )
}

export default Navigation
