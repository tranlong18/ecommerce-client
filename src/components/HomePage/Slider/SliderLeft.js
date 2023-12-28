import React, { Component } from 'react'
import ipad101 from '../../../images/ipad1-01.jpg'
import laptop01 from '../../../images/laptop-01.jpg'
import mb01 from '../../../images/mb-01.jpg'


export default class SliderLeft extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8">
        <div className="slider-area">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={ipad101} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={laptop01} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={mb01} alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
