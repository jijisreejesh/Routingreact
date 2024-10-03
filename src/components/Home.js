import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/Home1.css'
function Home() {
  const n=useNavigate();
  const handleHome=(()=>{
    n('/Home')
  })
  const handleAbout=(()=>{
    n('/About')
  })
  const handleContact=(()=>{
    n('/Contact')
  })
  const handleLogout=(()=>{
    n('/Logout')
  })
  return (

      <ul>
        <li onClick={handleHome}>Home</li>
        <li onClick={handleAbout}>About Us</li>
        <li onClick={handleContact}>Contact Us</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
   
  )
}

export default Home