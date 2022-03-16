import React from "react";
import "./subscr.css";

const Subscr = () => {
  return (
    <div className="sub_main  container">
      <div className="sub_head_div">
        <h1 className="sub_head fw-light">
          An enterprise template to ramp up your company website
        </h1>
      </div>
      <div className="sub_input">
        <input
          className="px-5 rounded-pill fs-4 border-0 inputs"
          placeholder="Your Email address"
        />
        <button className="px-3 py-3  rounded-pill fs-5 sub-button border-0">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Subscr;
