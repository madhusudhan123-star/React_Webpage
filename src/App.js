import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Font, { Text } from "react-font";
import "./App.css";

import {
  Header,
  Server1,
  Server2,
  Commits1,
  Commits2,
  Blog,
  Subscr,
  Contact,
} from "./compounts";
function App() {
  return (
    <div className="first_main_div">
      <div>
        <Header />
      </div>
      <Server1 />
      <Server2 />
      <Commits1 />
      <Commits2 />
      <Blog />
      <Subscr />
      <Contact />
    </div>
  );
}

export default App;

//  FONTS FAMILY
// 1.Manrope this family font is used for Heading
// 2.Open Sans this family font is used for other

// Icons
// 'AiOutlineArrowRight' arrow at right side
// 'AiOutlineArrowLeft' arrow at left side
// 'BsFillArrowDownCircleFill' down arrow
// 'BsCheckCircleFill' correct mark
// 'AiOutlineEye' Eye
// 'RiLeafLine' leaf
//  'BsSun' sun
