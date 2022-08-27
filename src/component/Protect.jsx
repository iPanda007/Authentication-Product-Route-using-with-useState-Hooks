import React from 'react'
import {Navigate} from 'react-router-dom'
const Protect = ({isLoggedIn,children}) => {
    if(!isLoggedIn){
       return <Navigate to='/' />
    }
  return (
    <div>
        {children}   
    </div>
  )
}

export default Protect
