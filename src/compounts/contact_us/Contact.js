import React from "react";
import "./contact.css";
import logo from "../../Assets/logo_dark.svg";

const Contact = () => {
  return (
    <div className="contact_main">
      <section class="footer">
        <div class="footer_div container">
          <div class="img_div">
            <img src={logo} alt="" className="footer_img" />
            <p className="footerpara">Copyright © 2022</p>
            <p className="footerpara">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div class="menu_div">
            <ul class="list-unstyled">
              <li className="footer_head">Landings</li>
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
            <ul class="list-unstyled">
              <li className="footer_head">Company</li>
              <li>Home</li>
              <li>Careers</li>
              <li>Services</li>
            </ul>
            <ul class="list-unstyled">
              <li className="footer_head">Blog</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
