import { React, useState } from "react";
import "./blog.css";
import img1 from "../../Assets/about/img1_about.svg";
import img2 from "../../Assets/about/img3_about.svg";
import img3 from "../../Assets/about/img1_about.svg";
import img6 from "../../Assets/about/img6_about.svg";
import img7 from "../../Assets/about/img7_about.svg";
import img8 from "../../Assets/about/img8_about.svg";
import useCollapse from "react-collapsed";

const Blog = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="blog_main">
      <div className="blog_main_div">
        <div className="comments container">
          <div class="services_div ">
            <div class="w-100 mt-5 d-flex justify-content-center flex-column align-items-center">
              <p>Our Blog</p>
              <h2 class="second-heading font-weight-light">
                Value proposition accelerator product management venture
              </h2>
            </div>
            <div class="cards_div cards d-flex justify-content-around mx-5">
              <div class="card selected_card text-left border-0">
                <img src={img1} className="card-img-top" />
                <div class="card-body">
                  <div className="catogry">
                    <p className="catogry_name">Category</p>
                    <p className="catogry_date  fw-light">November 22, 2021</p>
                  </div>
                  <p class="card-text fs-5 font-weight-bold">
                    Pitch termsheet backing validation focus release.
                  </p>
                  <div className="profile">
                    <img src={img8} className="profile_img" />
                    <div className="profile_information">
                      <p className="profile_name">Albus Dumbledore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card selected_card text-center border-0">
                <img src={img2} className="card-img-top" />
                <div class="card-body">
                  <div className="catogry">
                    <p className="catogry_name">Category</p>
                    <p className="catogry_date  fw-light">November 22, 2021</p>
                  </div>
                  <p class="card-text fs-5 font-weight-bold">
                    Seed round direct mailing non-disclosure agreement graphical
                    user interface rockstar.
                  </p>
                  <div className="profile">
                    <img src={img7} className="profile_img" />
                    <div className="profile_information">
                      <p className="profile_name">Albus Dumbledore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card selected_card text-center border-0">
                <img src={img3} className="card-img-top" />
                <div class="card-body">
                  <div className="catogry">
                    <p className="catogry_name">Category</p>
                    <p className="catogry_date  fw-light">November 22, 2021</p>
                  </div>
                  <p class="card-text fs-5 font-weight-bold">
                    Beta prototype sales iPad gen-z marketing network effects
                    value proposition
                  </p>
                  <div className="profile">
                    <img src={img6} className="profile_img" />
                    <div className="profile_information">
                      <p className="profile_name">Albus Dumbledore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <div className="private_button">
                <button
                  className={
                    isExpanded
                      ? "d-none"
                      : "px-5 py-3  rounded-pill fs-4 export-button"
                  }
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
                >
                  {isExpanded ? null : "Expand"}
                </button>
              </div>
              <section {...getCollapseProps()}>
                <div class="cards_div cards d-flex justify-content-around mx-5">
                  <div class="card selected_card text-left border-0">
                    <img src={img1} className="card-img-top" />
                    <div class="card-body">
                      <div className="catogry">
                        <p className="catogry_name">Category</p>
                        <p className="catogry_date  fw-light">
                          November 22, 2021
                        </p>
                      </div>
                      <p class="card-text fs-5 font-weight-bold">
                        Pitch termsheet backing validation focus release.
                      </p>
                      <div className="profile">
                        <img src={img8} className="profile_img" />
                        <div className="profile_information">
                          <p className="profile_name">Albus Dumbledore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card selected_card text-center border-0">
                    <img src={img2} className="card-img-top" />
                    <div class="card-body">
                      <div className="catogry">
                        <p className="catogry_name">Category</p>
                        <p className="catogry_date  fw-light">
                          November 22, 2021
                        </p>
                      </div>
                      <p class="card-text fs-5 font-weight-bold">
                        Seed round direct mailing non-disclosure agreement
                        graphical user interface rockstar.
                      </p>
                      <div className="profile">
                        <img src={img7} className="profile_img" />
                        <div className="profile_information">
                          <p className="profile_name">Albus Dumbledore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card selected_card text-center border-0">
                    <img src={img3} className="card-img-top" />
                    <div class="card-body">
                      <div className="catogry">
                        <p className="catogry_name">Category</p>
                        <p className="catogry_date  fw-light">
                          November 22, 2021
                        </p>
                      </div>
                      <p class="card-text fs-5 font-weight-bold">
                        Beta prototype sales iPad gen-z marketing network
                        effects value proposition
                      </p>
                      <div className="profile">
                        <img src={img6} className="profile_img" />
                        <div className="profile_information">
                          <p className="profile_name">Albus Dumbledore</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
