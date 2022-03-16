import React from "react";
import "./commits.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img6 from "../../Assets/about/img6_about.svg";
import img7 from "../../Assets/about/img7_about.svg";
import img8 from "../../Assets/about/img8_about.svg";
import Font, { Text } from "react-font";

const Commits1 = () => {
  return (
    <div className="commits1_div">
      <div className="part1_div">
        <div className="part1_head_div">
          <h2 className="part1_heading">
            <Font family="Manrope">
              An enterprise template to ramp up your company website
            </Font>
          </h2>
        </div>
        <div className="part1_icons">
          <div className="part1_iconleft" id="part1_iconleft">
            <AiOutlineArrowLeft />
          </div>
          <div className="part1_iconright" id="part1_iconright">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className="part2_div">
        <div class="cards_div cards d-flex justify-content-around mx-5">
          <div class="card selected_card text-center border-0">
            <div class="card-body">
              <p class="card-text fs-5 font-weight-bold texts" id="texts">
                “Buyer buzz partner network disruptive non-disclosure agreement
                business”
              </p>
              <div className="profile">
                <img src={img7} className="profile_img" />
                <div className="profile_information">
                  <p className="profile_name">Albus Dumbledore</p>
                  <p className="profile_position">Manager @ Howarts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card selected_card text-center border-0">
            <div class="card-body">
              <p class="card-text fs-5 font-weight-bold middle">
                “Learning curve infrastructure value proposition advisor
                strategy user experience hypotheses investor.”
              </p>
              <div className="profile">
                <img src={img8} className="profile_img" />
                <div className="profile_information">
                  <p className="profile_name">Albus Dumbledore</p>
                  <p className="profile_position">Manager @ Howarts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card selected_card text-center border-0">
            <div class="card-body">
              <p class="card-text fs-5 font-weight-bold">
                “Release facebook responsive web design business model canvas
                seed money monetization.”
              </p>
              <div className="profile">
                <img src={img6} className="profile_img" />
                <div className="profile_information">
                  <p className="profile_name">Albus Dumbledore</p>
                  <p className="profile_position">Manager @ Howarts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commits1;
