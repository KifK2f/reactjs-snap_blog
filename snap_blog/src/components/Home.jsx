import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../assets/css/home.css"

class Home extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="container py-5">
      <div className="row justify-content-center">

        {/* CARD 1 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="card shadow-custom my-4">
            
            {/* IMAGE PLACEHOLDER */}
            <div className="image-placeholder"></div>

            <div className="card-body text-center">
              <h5 className="card-title">Titre 1</h5>
              <hr />
              <p className="card-text">
                Description courte ici
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="card shadow-custom my-4">
            <div className="image-placeholder"></div>

            <div className="card-body text-center">
              <h5 className="card-title">Titre 2</h5>
              <hr />
              <p className="card-text">
                Description courte ici
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
          <div className="card shadow-custom my-4">
            <div className="image-placeholder"></div>

            <div className="card-body text-center">
              <h5 className="card-title">Titre 3</h5>
              <hr />
              <p className="card-text">
                Description courte ici
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
      </>    
    );
  }
}

export default Home
