import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const SideBar = () => {
  return (
    <div className='sidebar'>
     
        <ul>
              <Link to="/">
              <li>Home</li>
              </Link>
              <Link to="/">
                <li>Store</li>
              </Link>
              <Link to="/">
              <li>Contact</li>
              </Link>
            </ul>

        
    </div>
  )
}

export default SideBar