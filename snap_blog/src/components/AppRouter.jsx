import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Register from './Register'
import Login from './Login'

class AppRouter extends React.Component {

  constructor(){
    super()
    this.state = {}
  }


  render() {
    return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    )
  }
}

export default AppRouter
