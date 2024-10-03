import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  let a=useNavigate();
  const handleSubmit=(()=>{
    a('/Home')
  })
  const handleCancel=(()=>{
    a('/Logout')
  })
  return (
    <div>
      <h1>Signup</h1>
       <form>
        <label htmlFor='name1'>Enter the name</label>
        <input type="text" id="name1"></input><br/>
        <label htmlFor='name'>Enter the username</label>
        <input type="text" id="name"></input><br/>
        <label htmlFor='password'>Enter the password</label>
        <input type="password" id="password"></input><br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
   </form>
    </div>
  )
}

export default Signup