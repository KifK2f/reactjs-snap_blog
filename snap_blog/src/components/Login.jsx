import React from 'react'

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    //A chaque fois que je vais changer un truc dans le champ email afiche ce message  dans la console
    email = event =>{
        console.log("Changement dans le champ email");
    }

    render() {
        return(
            <>
                <form action="POST">
                   <input type="text" name='email' placeholder='Votre email' onChange={this.email} />
                   <input type="password" name='password' placeholder='Votre mot de passe' />
                   <button type='submit'>Me connecter</button>
                </form>
            </>
        );
    }

}

export default Login
