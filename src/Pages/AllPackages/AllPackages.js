import React from "react";
import { Container, Row } from "react-bootstrap";
import SinglepackageCard from "./SinglePackageCard/SinglepackageCard";
import "./AllPackages.css";
import GetData from "../../Assets/hooks/getData";

const AllPackages = () => {
  const [packDetails] = GetData();
  return (
    <>
      <section id="packages-banner" className="py-5">
        <h2 className="text-center text-abril-white">Our Classes</h2>
      </section>
      <section
        id="allpackages"
        className="pt-5 pb-1"
        style={{ background: "#F5FBF9" }}
      >
        <Container>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <h6 className="text-light-green text-center">All Packages</h6>
              <h2 className="text-center abril-font">Our All Packages</h2>
              <p className="text-center">
                Gym and Fitness was founded in 2002 as a family owned and
                operated business. The Gym and Fitness founders didn’t want it
                to be just another gym equipment retailer - they wanted to be
                the best in the industry.The Gym and Fitness founders didn’t
                want it to be just another gym
              </p>
            </div>
          </Row>
          <Row xs={1} md={2} lg={3} className="my-5">
            {packDetails.map((detail, index) => (
              <SinglepackageCard
                key={index}
                detail={detail}
              ></SinglepackageCard>
            ))}
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default AllPackages;
