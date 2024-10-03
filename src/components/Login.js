import React from 'react'
import "./styles/Login1.css"
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate();
  const handleSubmit=(()=>{
    navigate('/Home')
  })
  const handleCancel=(()=>{
    navigate('/Logout')
  })
  return (
   <form>
    <label htmlFor='name'>Enter the username</label>
    <input type="text" id="name"></input><br/>
    <label htmlFor='password'>Enter the password</label>
    <input type="password" id="password"></input><br/>
   <button onClick={handleSubmit}>Login</button>
   <button onClick={handleCancel}>Cancel</button>
   </form>
  )
}

export default Login