import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate = useNavigate();
  const handleLogin =() => {
    Navigate("/Login")
  }
  return (
    <div>
        <p><input type ="text" placeholder='Enter Name'></input> </p>
        <p>Date of Birth<input type ="datetime-local" ></input> </p>
        <p>Location<input type ="radio" name='location' ></input>Hydrabad</p>
        
        <p><input type ="number" placeholder='Enter Phone no.'></input> </p>
        <p><input type ="text" placeholder='Enter email'></input> </p>
        <p><input type ="password" placeholder='Enter password'></input> </p>
        <button>Sign Up</button>
        <hr></hr>
        <button onClick= {handleLogin} >Already have account</button>
    </div>
  )
}
