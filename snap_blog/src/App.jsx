import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Car from './components/Car'
import Login from './components/Login'
import Photos from './components/Photos'

import { BrowserRouter as MonRouter, Route, Link, Routes } from "react-router-dom"


//Link permet de changeer d'URL sans recharger la page

function App() {

  return (
    <>
      {/* <Welcome />
      <hr /> */}
      {/* <Car brand="Toyota" year="2020"/>
      <Car brand="BMW" year="1984"/>
      <Car brand="Jaguar" year="1992"/> */}
      
      <MonRouter>
        <div>
          <nav>
            <ul>
              <li> <Link to="/">Accueil</Link> </li>
              <li> <Link to="/login">Login</Link> </li>
              <li> <Link to="/car">Car</Link> </li>
              <li> <Link to="/photos">Photos</Link> </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/car" element={<Car />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>

        </div>
      </MonRouter>


    </>
  )
}

export default App
