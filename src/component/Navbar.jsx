import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const linkStyle = ({isActive})=>{
        return {
            padding:isActive?'10px':'10px',
            color:isActive?'#2cc79e':'',
            textDecoration:isActive?'none':'none'
        }
    }
  return (
    <div>
       <nav style={{textAlign:"center",marginTop:"20px"}}>
          <NavLink to='/' style={linkStyle}>
               Home
          </NavLink>
          <NavLink to='/about'
          style={linkStyle}
          >
               About
          </NavLink>
          <NavLink to='/profile'
          style={linkStyle}
          >
               Profile
          </NavLink>
       </nav>
    </div>
  )
}

export default Navbar
