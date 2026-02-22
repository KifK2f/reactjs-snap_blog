import React from 'react'
import "../assets/css/navbar.css"
import { Link } from "react-router-dom"

class Navbar extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-custom">
            <div className="container">

                {/* Logo / Brand = marque */}
                <Link className="navbar-brand navbar-brand-custom" to="/">
                Snap Blog
                </Link>



                {/* Bouton pour les petits écrans */}
                <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarExample01"
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                {/* NB :  On ne peut pas utiliser <Link></Link> sans faire le routage d'où l'errur */}
                <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link navbar-link-custom" to="/login">Connexion</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link navbar-link-custom" to="/register">Inscription</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">about us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">collaboration</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">contact us</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }

}

export default Navbar
