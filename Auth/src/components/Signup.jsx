/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/Signup.css'



const Signup = () => {

    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(result => {console.log(result)
        navigate('./login')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="name">Name: </label>
            <input
                id='name' 
                type='text' 
                name='name' 
                placeholder='Enter name...'
                onChange={(e)=> setName(e.target.value)}
            />
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
                placeholder='Create a password...'
                onChange={(e)=> setPassword(e.target.value)}
            />
            <button type='submit'>Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup