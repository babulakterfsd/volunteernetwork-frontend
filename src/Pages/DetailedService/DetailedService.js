import React, { useEffect, useState } from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./DetailedService.css";
import { Link } from "react-router-dom";

const TourDetail = () => {
  const { serviceID } = useParams();
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);

  return (
    <>
      <section id="detailedservice-banner" className="py-5">
        <h2 className="text-center text-abril-white">
          Details Of : {packDetails[serviceID - 1]?.name}
        </h2>
      </section>
      <section id="tourdetail" className="pt-5 mt-3">
        <Container>
          <Row>
            <div className="col-12 col-md-4">
              <img
                src={packDetails[serviceID - 1]?.img}
                alt="detailedpic"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-8">
              <Card className="shadow-none mb-5">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="text-light-green fw-semi-bold">
                      {packDetails[serviceID - 1]?.duration}
                    </Card.Text>
                    <h5 className="text-light-green fw-bolder">
                      ${packDetails[serviceID - 1]?.price} /month
                    </h5>
                  </div>

                  <Card.Title className="abril-font">
                    {packDetails[serviceID - 1]?.name}
                  </Card.Title>
                  <p className="text-cyan">
                    {packDetails[serviceID - 1]?.longDesc}
                  </p>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                  <Link to="/order">
                    <Button className="btn-light-green fw-bold py-2 px-3">
                      Enroll Now
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetail;
