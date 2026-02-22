import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'

class AppRouter extends React.Component {

  constructor(){
    super()
    this.state = {}
  }


  render() {
    return (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
    )
  }
}

export default AppRouter
