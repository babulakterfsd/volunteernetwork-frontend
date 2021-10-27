import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <Container fluid>
          <Row>
            <div className="footer py-5  bg-dark d-flex flex-wrap justify-content-around">
              <div className="col-12 col-md-3 text-center">
                {/* Social Icons */}
                <div className="social-links mb-3">
                  <h6 className="text-white ms-2">We are social</h6>
                  <a
                    rel="noopener noreferrer"
                    href="https://facebook.com/babulakterfsd"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-facebook me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/babulakterfsd"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-twitter me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-youtube me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://vimeo.com/"
                    target="_blank"
                    className="text-light-green"
                  >
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
              {/* Footer text */}
              <div className="col-12 col-md-3 text-center mb-3">
                <div className="terms">
                  <h6 className="text-white">
                    Check out Website Terms And Conditions. Save Time, and Find
                    it Here. Web, Images, Video. Information 24/7. Wiki, News ,
                    More
                  </h6>
                </div>
              </div>
              {/* Copyright */}
              <div className="col-12 col-md-3 text-center">
                <div className="copyright">
                  <h6 className="text-white mt-2">
                    All rights reserved by GymZilla - 2022 &trade;
                  </h6>
                  <h6 className="text-white mt-2">
                    Developed with{" "}
                    <i className="fa fa-heart text-light-green me-2"></i> by
                    Babul.
                  </h6>
                </div>
              </div>
              {/* Quick Links */}
              <div className="col-12 col-md-3 text-center my-3 my-lg-0">
                <div className="terms">
                  <h6 className="text-white">
                    Quick Links:
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <Link
                          to="/about"
                          className="text-decoration-none text-light-green fw-semi-bold"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link
                          to="/allpackages"
                          className="text-decoration-none text-light-green fw-semi-bold mx-2"
                        >
                          Packages
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link
                          to="/process"
                          className="text-decoration-none text-light-green fw-semi-bold mx-2"
                        >
                          Joining process
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link
                          to="/contact"
                          className="text-decoration-none text-light-green fw-semi-bold mx-2"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </h6>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
