import React from "react";
import "./server2.css";
import img4 from "../../Assets/about/img4_about.svg";
import img5 from "../../Assets/about/img5_about.svg";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiLeafLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";

const Server2 = () => {
  return (
    <div>
      <div class="blog_div d-flex">
        <div class="blog_img_div">
          <img src={img4} alt="" class="blog_img" />
        </div>
        <div class="blog_message">
          <h2 class="blog_heading fs-1">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <p class="blog_para">
            <p class="lead para fs-4">
              <BsCheckCircleFill /> We connect our customers with the best.
            </p>
            <p class="lead para fs-4">
              <BsCheckCircleFill /> Advisor success customer launch party.
            </p>
            <p class="lead para fs-4">
              <BsCheckCircleFill /> Business-to-consumer long tail.
            </p>
            <button className="px-5 py-3  rounded-pill fs-4 start-button">
              Start now
            </button>
          </p>
        </div>
      </div>
      <div class="blog_div_two d-flex mt-5">
        <div class="blog_message">
          <h2 class="blog_heading fs-1">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <p class="blog_para_two">
            <p class="lead para fs-4 two">
              <AiOutlineEye /> We connect our customers with the best.
            </p>
            <p class="lead para fs-4 two">
              <RiLeafLine /> Advisor success customer launch party.
            </p>
            <p class="lead para fs-4 two">
              <BsSun /> Business-to-consumer long tail.
            </p>
          </p>
        </div>
        <div class="blog_img_div">
          <img src={img5} alt="" class="blog_im" />
        </div>
      </div>
    </div>
  );
};

export default Server2;
