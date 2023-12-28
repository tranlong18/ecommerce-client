import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import msi01 from '../../../images/msi-01.jpg'
import phone201 from '../../../images/phone 2-01.jpg'

export default class BannerRight extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 text-center pt-xs-30">
        <div className="li-banner">
          <Link tp="#">
            <img src={msi01} alt="not found" />
          </Link>
        </div>
        <div className="li-banner mt-15 mt-sm-30 mt-xs-30">
          <Link tp="#">
            <img src={phone201} alt="not found" />
          </Link>
        </div>
      </div>
    )
  }
}
