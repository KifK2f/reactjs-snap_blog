import React from 'react'

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    // //A chaque fois que je vais changer un truc dans le champ email afiche ce message  dans la console
    // email = event =>{
    //     console.log("Changement dans le champ email");
    // }

    //A chaque fois que je vais changer un truc dans le champ email afiche ce message  dans la console
    onEmailChange = event =>{
        this.setState({email: event.target.value}, () => {
            console.log(this.state);
        })
    }

    onPasswordChange = event =>{
        this.setState({password: event.target.value}, () => {
            console.log(this.state);
        })
    }

    handleFormSubmit = event => {
        event.preventDefault() // Empêche le comportement par défaut du formulaire (rechargement de la page)
        localStorage.setItem("token", "Friedo12345") // Simule la création d'un token d'authentification en le stockant dans le localStorage
    }



    render() {
        return(
            <>
                <form action="POST" onSubmit={this.handleFormSubmit}>
                   <input type="text" name='email' placeholder='Votre email' onChange={this.onEmailChange} />
                   <input type="password" name='password' placeholder='Votre mot de passe' onChange={this.onPasswordChange} />
                   <button type='submit'>Me connecter</button>
                </form>
            </>
        );
    }

}

export default Login
