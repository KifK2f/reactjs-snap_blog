import React from 'react'
import Navbar from './Navbar'
import "../assets/css/auth.css"
import axios from 'axios'
import { Navigate } from 'react-router-dom'

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            redirect: false,
            errors: []
        }
    }

    componentWillMount(){
        // redirection si l'utilisateur est déjà connecté
        if(localStorage.getItem("token")){
            this.setState({ redirect: true })
        }
    }

    // Handlers pour mettre à jour l'état en fonction des entrées utilisateur
    handleEmailChange = event => {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault() // Empêche le comportement par défaut du formulaire (rechargement de la page)

        // Ici, vous pouvez ajouter la logique pour envoyer les données de connexion à votre backend
let bodyFormData = new FormData()
        bodyFormData.append("email", this.state.email)
        bodyFormData.append("password", this.state.password)

        axios.post("http://127.0.0.1:8000/api/login", bodyFormData)
            .then(res => {
                console.log(res.data)
                // stocker le token dans le localStorage
                localStorage.setItem("token", res.data.api_token)
                // redirection une fois l'inscription réussie
                this.setState({ redirect: true })
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.setState({ errors: error.response.data.errors }, () => {
                        console.log(this.state)
                    })
                }
                console.log(error.response)
            })
    }



  render() {
     if (this.state.redirect) {
        return <Navigate to="/" />
    }

    return (
        <>
        <Navbar />
        <div className="d-flex align-items-center justify-content-center vh-100 bg-white p-3">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100" style={{ maxWidth: "1000px" }}>

            {/* Texte à gauche */}
            <div className="mb-4 text-center text-lg-start">
            <h1 className="display-3 mb-2 fw-bold my_text_color">Snap Blog</h1>
            <p className="fs-4 mb-0">Connectez-vous pour continuer</p>
            {/* <p className="fs-4">Merci pour voter compréhension</p> */}
            </div>

            {/* Formulaire à droite */}
            <form  method='POST' onSubmit={this.handleSubmit} className="card p-4 shadow w-100 my_background_color" style={{ maxWidth: "400px" }}>
            
            <label htmlFor="">Email</label>
            <input
                type="email"
                className={`form-control mb-3 ${this.state.errors && this.state.errors.email ? 'is-invalid' : ''}`}
                placeholder="Entrez votre email"
                required
                onChange={this.handleEmailChange}
            />
            {this.state.errors && this.state.errors.email ? <div className="text-white bg-danger p-2 rounded mt-1">{this.state.errors['email']}</div> : ''}

            <label htmlFor="">Mot de passe</label>
            <input
                type="password"
                className={`form-control mb-3 ${this.state.errors && this.state.errors.password ? 'is-invalid' : ''}`}
                placeholder="Entrez votre mot de passe"
                required
                onChange={this.handlePasswordChange}
            />
            {this.state.errors && this.state.errors.password ? <div className="text-white bg-danger p-2 rounded mt-1 mb-1">{this.state.errors['password']}</div> : ''} 

            {this.state.errors && this.state.errors == 'bad_credentials' ? <div className="alert alert-warning">Email ou mot de passe incorrect</div> : ''}

            <div className="d-flex flex-column text-center gap-2 mb-3">
                <button type="submit" className="btn btn-primary fw-bold">
                Me connecter
                </button>
                <a href="#" className="text-light small">Mot de passe oublié ?</a>
            </div>


            <div className="text-center mt-3">
                <a href="/register" className="btn btn-success fw-bold">
                Créer un compte
                </a>
            </div>
            </form>

        </div>
        </div>
        </>
    )
  }
}

export default Login
