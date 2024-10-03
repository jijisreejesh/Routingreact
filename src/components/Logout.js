import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Logout1.css'

function Logout() {
  return (
    <div>
        <ul>
            <li><Link to="/Login" className="link" >Login</Link></li>
            <li><Link to="/Signup" className='link' >Signup</Link></li>
        </ul>
     </div>
  )
}

export default Logout