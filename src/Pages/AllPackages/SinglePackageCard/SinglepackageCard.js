import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackageCard.css";

const SinglepackageCard = ({ detail }) => {
  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text className="text-light-green fw-semi-bold">
              {detail.duration}
            </Card.Text>
            <h5 className="text-light-green fw-bolder">
              ${detail.price}
              <small>/month</small>
            </h5>
          </div>

          <Card.Title className="abril-font">{detail?.title}</Card.Title>

          <p className="text-cyan">{detail?.shortDesc}</p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Link to={`/DetailedService/${detail?._id}`}>
            <Button className="btn-abril fw-semi-bold  py-2 px-3">
              See Details
            </Button>
          </Link>
          <Link to="/order">
            <Button className="btn-light-green fw-bold py-2 px-3">
              Enroll Now
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
