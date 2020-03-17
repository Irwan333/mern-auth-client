import React from "react";
import Layout from "./core/Layout";
import "./assets/style/Landing.css";
import "./assets/style/Fonts.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <div className="single_slider d-flex align-items-center slider_bg_1">
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-10 col-md-10">
              <div className="slider_text">
                <h1
                  className="wow fadeInLeft poppins-bold title-landing"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  CODE PROGRAM
                </h1>
                <h6
                  className="wow fadeInLeft subtitle-landing poppins-semibold"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  Learn Code for better experience
                </h6>
                <Link
                  className="boxed-btn3 wow fadeInLeft poppins-bold"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  to=""
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
