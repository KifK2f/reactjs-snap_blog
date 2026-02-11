import React from 'react'

class Car extends React.Component {

  constructor(){
    super()
    this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
    }
  }

//   //Méthode qui s'exécute après le rendu du composant 
//   componentDidMount() {
//       this.setState({color: "green"})
//     }

  //Méthode pour changer la valeur de variable couleur de la voiture
  changeColor = () => {
    this.setState({color: "blue"}, () => {
        console.log(this.state.color)
    }) // La fonction de callbasck est utilisée apres le changement d'état
  }

  render() {
    // console.log(this.state.color)
    return (
    <>
      <h1>My {this.state.brand} </h1><p>
            It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type='button' onClick={this.changeColor}>Change Color</button>
    </>
    );
}
}
export default Car
