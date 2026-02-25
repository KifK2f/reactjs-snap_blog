import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Register from './Register'
import Login from './Login'
import PostPicture from './PostPicture'

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
            <Route path="/pictures/new" element={<PostPicture />} />
          </Routes>
    )
  }
}

export default AppRouter
