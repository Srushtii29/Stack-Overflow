import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' activeclassname='active' className='side-nav-links'>
            <img src={Globe} className='Globe' alt="Globe" />
            <p style={{paddingLeft:"3px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft:"30px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft:"30px"}}>
            <p>Users</p>
          </NavLink>
        </div>
        <a href='https://stackgosocial.netlify.app/' rel='noreferrer' target='_blank' className='side-nav-links'>Community</a>
      </nav> 
    </div>
  )
}

export default LeftSidebar
