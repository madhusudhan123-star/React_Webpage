import React from "react";
import "./header.css";
import Logo from "../../Assets/Logo.svg";
import header from "../../Assets/header/header.svg";
import second from "../../Assets/header/second.svg";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Font, { Text } from "react-font";

const Header = () => {
  return (
    <div className="header-main">
      <nav class="navbar navbar-expand-lg">
        <div class="container d-block my-4">
          <a class="navbar-brand my" href="#">
            <img src={Logo} />
          </a>
          <button
            class="navbar-toggler float-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fs-2">
              <GiHamburgerMenu />
            </span>
          </button>
          <div
            class="collapse navbar-collapse float-none float-sm-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav fs-5 other-navbar">
              <a class="nav-link" aria-current="page" href="#">
                Product
              </a>
              <a class="nav-link" href="#">
                Services
              </a>
              <a class="nav-link" href="#">
                About
              </a>
              <a class="nav-link">
                <button className="btn  login_button py-2 px-5 rounded-pill fw-bold ">
                  Log In
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container d-flex gap-3 mt-5 main-content">
        <div className=" text-light header-content">
          <Font family="Manrope">
            <h1 className=" text-ms-start text-sm-start text-center">
              Save time by building fast with Boldo Template{" "}
            </h1>
          </Font>
          <Font family="Open Sans">
            <p className="w-90">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className=" button-div">
              <button className="rounded-pill border border-2 border-white py-2 px-4 m-1 header-button-one">
                Buy Template
              </button>
              <button className="rounded-pill border  border-2 border-white text-white  py-2 px-4 header-button-two">
                Explore
              </button>
            </div>
          </Font>
        </div>
        <div className="w-50  header-img">
          <img src={header} className="" />
        </div>
      </div>
      <div className="sider-main-div">
        <div className="slideing">
          <h3>
            <img src={Logo} />
          </h3>
          <h3>
            <img src={second} />
          </h3>
          <h3>
            <img src={Logo} />
          </h3>
          <h3>
            <img src={second} />
          </h3>
          <h3>
            <img src={Logo} />
          </h3>
          <h3>
            <img src={second} />
          </h3>
          <h3>
            <img src={Logo} />
          </h3>
          <h3>
            <img src={second} />
          </h3>
          <h3>
            <img src={Logo} />
          </h3>
          <h3>
            <img src={second} />
          </h3>
          <h3>
            <img src={Logo} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
