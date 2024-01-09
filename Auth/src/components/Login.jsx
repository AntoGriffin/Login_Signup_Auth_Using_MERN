/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = () => {
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/login',{email,password})
        .then(result => {
          console.log(result)
          if(result.data === 'Success'){
              navigate('/home')
          }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            
             <label htmlFor='Email'>Email: </label>
            <input 
                id='email'
                type='email'
                name='email'
                placeholder='Email address...'
                onChange={(e)=> setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password: </label>
            <input 
                id='password'
                type='password'
                name='password'
                placeholder='Enter a password...'
                onChange={(e)=> setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
        <p>Dont have an account?</p>
        <Link to="/">Sign Up</Link>
    </div>
  )
}

export default Login