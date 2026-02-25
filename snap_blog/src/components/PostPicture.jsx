import React from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

class PostPicture extends React.Component {

  constructor(){
    super()
    this.state = {
        title: '',
        description: '',
        image: '',
        redirect: false,
        errors: []
    }
  }

  handleTitleChange = event => {
        this.setState({ title: event.target.value }, () =>{
            console.log(this.state)
        })
    }

    handleDescriptionChange = event => {
        this.setState({ description: event.target.value }, () => {
            console.log(this.state)
        })
    }

    handleImageChange = event => {
        console.log(event.target.files)
        this.setState({ image: event.target.files[0] }, () => {
            console.log(this.state)
        })
    } // [0] pour récupérer le premier fichier sélectionné

    handleSubmit = event =>{
        event.preventDefault()

        let bodyFormData = new FormData()
        bodyFormData.append("title", this.state.title)
        bodyFormData.append("description", this.state.description)
        bodyFormData.append("image", this.state.image)


        axios.post("http://127.0.0.1:8000/api/pictures", bodyFormData)
            .then(res => {
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
        return(
            <>
                <div className="d-flex align-items-center justify-content-center vh-100 bg-white p-3">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between w-100" style={{ maxWidth: "1000px" }}>
                    <h2 className="text-center my-5">Ajouter une nouvelle photo</h2>

                    {/* encType='multipart/form-data' car il y a un fichier à envoyer */}
                    <form  method='POST' onSubmit={this.handleSubmit} className="card p-4 shadow w-100 my_background_color" style={{ maxWidth: "400px" }} encType='multipart/form-data' >
                    <label htmlFor="">Titre</label>
                    <input
                        type="text"
                        className={`form-control mb-3 ${this.state.errors && this.state.errors.title ? 'is-invalid' : ''}`}
                        placeholder="Entrez le titre de votre photo"
                        required
                        onChange={this.handleTitleChange}
                    />
                    {this.state.errors && this.state.errors.title ? <div className="text-white bg-danger p-2 rounded mt-1">{this.state.errors['title']}</div> : ''}


                    <label htmlFor="">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleDescriptionChange}></textarea>
                    { this.state.errors && this.state.errors.description ? <div className="text-white bg-danger p-2 rounded mt-1">{this.state.errors['description']}</div> : ''}

                    <label htmlFor="">Image</label>
                    <input className={`form-control mb-3 ${this.state.errors && this.state.errors.image ? 'is-invalid' : ''}`} type="file" id="formFile" onChange={this.handleImageChange}/>
                    { this.state.errors && this.state.errors.image ? <div className=" mb-3 text-white bg-danger p-2 rounded mt-1">{this.state.errors['image']}</div> : ''}


                    <div className="d-flex flex-column text-center gap-2 mb-3">
                        <button type="submit" className="btn btn-primary fw-bold">
                        Ajouter
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </>
        )
    }

}  

export default PostPicture
