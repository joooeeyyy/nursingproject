import React, { Component } from "react";
import { Link } from "react-router-dom";

// Elements
import AboutSection from "../elements/about";
import LatestNewsSection from "../elements/latest-news-slider";
import FeatureSection3 from "../elements/feature-section3";
import TeamSection from "../elements/team";
import TestimonialSection from "../elements/testimonial";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>About Us</h1>
                  <h1 className="edited-details">
                    Founded in 2003, Millenium Nursing Agency provides essential
                    care and support to the community seeking assistance.
                    Millenium Nursing Agency is a certified home health agency
                    that has accreditation with medicare, medicaid, the Ohio
                    Department of Developmental Disabilities, and counsel of
                    aging. ​ We offer our services throughout Hamilton,
                    Clermont, Warren, Butler and Montgomery Counties in Ohio.
                    Certified Home Health Aide services from Millenium Nursing
                    Agency can allow your loved one to maintain dignity and
                    independence in the privacy and comfort of their own home. ​
                    We also cover a wide range of services such as general home
                    care, physical therapy, speech therapy, and skilled nursing.
                    standard home care provider. We are here to serve you and
                    are honored for the opportunity. ​ Warm regards, Anne
                    Efeurhobo Founder & President
                  </h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>
          <AboutSection />

          <FeatureSection3 />

          <TeamSection />

          <TestimonialSection />

          <LatestNewsSection />
        </div>
      </>
    );
  }
}

export default AboutUs;
