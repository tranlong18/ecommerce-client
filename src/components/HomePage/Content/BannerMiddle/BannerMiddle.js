import React, { Component } from "react";
import { Link } from "react-router-dom";

import ipad101 from "../../../../images/ipad1-01.jpg";
import ip01 from "../../../../images/ip-01.jpg";
import phone201 from "../../../../images/phone 2-01.jpg";

export default class BannerMiddle extends Component {
  render() {
    return (
      <div className="li-static-banner" style={{ marginTop: -50 }}>
        <div className="container">
          <div className="row">
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center">
              <div className="single-banner">
                <Link to="#">
                  <img
                    src={ip01}
                    alt="Li's Static Banner"
                  />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img
                    src={phone201}
                    alt="Li's Static Banner"
                  />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
            {/* Begin Single Banner Area */}
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
              <div className="single-banner">
                <Link to="#">
                  <img
                    className="d-block w-100"
                    src={ipad101}
                    alt="First slide"
                  />
                </Link>
              </div>
            </div>
            {/* Single Banner Area End Here */}
          </div>
        </div>
      </div>
    );
  }
}
