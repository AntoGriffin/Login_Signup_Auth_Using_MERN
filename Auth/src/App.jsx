/* eslint-disable no-unused-vars */
import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App