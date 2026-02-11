import axios from 'axios';
import React from 'react'

class Photos extends React.Component {

    constructor(){
        super()
        this.state = {
            photos : []
        }
    }

    //Quand le composant est monté, on va faire une requete pour aller chercher les photos
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/photos")
        .then(res => {
            // console.log(res);
            this.setState({photos: res.data}, () => {
                console.log(this.state);
            }) })// Si la promesse est résolue, on met à jour le state avec les données reçues
        .catch(error => {
            console.log(error.response);
        }) // Si la promesse est rejetée, on affiche l'erreur dans la console
    }

    render(){
        return(
            <>
                {/* Sans key :
React ne sait pas quel élément correspond à quel autre
Mauvaise performance
Risque d’erreurs d’affichage */}

                {/* Donc à défaut d'avoir l'id provenant de la base de données, on peut utiliser l'index du tableau comme clé */}
                <div>
                    {this.state.photos.map((photo, index) => <h1 key={index}>{photo.title}</h1>)}
                </div>
            </>
        );
    }


}

export default Photos
