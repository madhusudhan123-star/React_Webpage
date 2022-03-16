import React from "react";
import "./server.css";
import { div } from "react-bootstrap";
import Font, { Text } from "react-font";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../../Assets/about/img1_about.svg";
import img2 from "../../Assets/about/img2_about.svg";
import img3 from "../../Assets/about/img3_about.svg";

const Server1 = () => {
  return (
    <div className="serveris-main">
      <div class="services_div">
        <div className="w-100 d-flex justify-content-center server-section">
          <p>Our Services</p>
        </div>
        <Font family="Manrope">
          <div class="w-100 d-flex justify-content-center">
            <h2 class="second-heading font-weight-light">
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>
        </Font>
        <div class="cards_div cards d-flex justify-content-around">
          <div class="card selected_card border-0">
            <i class="card-img-top">
              <img src={img1} className="img_server_1" />
            </i>
            <div class="card-body">
              <h4 className="fs-2">Cool feature title</h4>
              <p class="card-text fs-5 font-weight-bold information">
                Learning curve network effects return on investment.
              </p>
              <p className="border-line fs-4 hovereffect">
                Export Page <AiOutlineArrowRight className="arrow" />
              </p>
            </div>
          </div>
          <div class="card selected_card border-0">
            <i class="card-img-top">
              <img src={img2} className="img_server_1" />
            </i>
            <div class="card-body">
              <h4 className="fs-2">Even cooler feature</h4>
              <p class="card-text fs-5 font-weight-bold information">
                Learning curve network effects return on investment.
              </p>

              <p className="border-line fs-4 hovereffect">
                Export Page <AiOutlineArrowRight className="arrow" />
              </p>
            </div>
          </div>
          <div class="card selected_card border-0">
            <i class=" card-img-top">
              <img src={img3} className="img_server_1" />
            </i>
            <div class="card-body">
              <h4 className="fs-2">Cool feature title</h4>
              <p class="card-text fs-5 font-weight-bold information">
                Learning curve network effects return on investment.
              </p>
              <p className="border-line fs-4 hovereffect">
                Export Page <AiOutlineArrowRight className="arrow" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server1;
