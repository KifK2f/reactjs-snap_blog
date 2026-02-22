import React from 'react'
import "../assets/css/navbar.css"

class navbar extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-custom">
            <div className="container">

                {/* Logo / Brand */}
                <a className="navbar-brand navbar-brand-custom" href="#">
                our jewelry
                </a>

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
                <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">shop online</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">new collection</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">about us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">collaboration</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbar-link-custom" href="#">contact us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }

}

export default navbar
