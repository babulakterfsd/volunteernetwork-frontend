import React, { useEffect, useState } from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./DetailedService.css";
import { Link,useHistory } from "react-router-dom";



const TourDetail = () => {
  const { packageId } = useParams();
  const [packDetails, setPackDetails] = useState([]);

  const history = useHistory();
  const redirect_uri =  "/allpackages";

  //details of a package
  useEffect(() => {
    fetch(`https://murmuring-shelf-43649.herokuapp.com/DetailedService/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, [packageId]);

  //delete a package
  const handleDeletePack = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    if (proceed) {
      const url = `https://murmuring-shelf-43649.herokuapp.com/DetailedService/${packageId}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully !");
            history.push(redirect_uri);
            // const remainingPacks = packDetails.filter((pack) => pack._id !== id);
            // setPackDetails(remainingPacks);
          }
        });
    }
  };

  return (
    <>
      <section id="detailedservice-banner" className="py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-6 mx-auto">
              <Card className="shadow-none mb-5">
                <Card.Body>
                  <Card.Img variant="top" src={packDetails?.img} />
                  <Card.Title className="abril-font">
                    {packDetails?.title}
                  </Card.Title>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                  <Link to={`${packDetails?._id}/updatepack`}>
                    <Button className="btn-light-green fw-bold py-2 px-3">
                      Update Pack
                    </Button>
                  </Link>     
                    <Button onClick={() => handleDeletePack(packDetails?.packageId)} className="btn-danger fw-bold py-2 px-3">
                      Delate pack
                    </Button>
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
