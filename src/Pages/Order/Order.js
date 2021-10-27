import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import "./Order.css";

const Order = () => {
  const { user } = useAuth();

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <section id="order-banner" className="py-5">
        <h2 className="text-center text-abril-white">Confirm Order</h2>
      </section>
      <Container>
        <Row>
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan"
            >
              <h2 className="mb-4 text-center">
                After Choosing A Package, Fill This Form !
              </h2>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    value={user?.displayName}
                    className="text-secondary fw-semi-bold"
                    readOnly
                    {...register("name", { required: true })}
                    {...(errors.name && <span>Name is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={user?.email}
                    className="text-secondary fw-semi-bold"
                    readOnly
                    {...register("email", { required: true })}
                    {...(errors.email && <span>Email is required</span>)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPostCode">
                  <Form.Label>ZIP</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5850"
                    {...register("zip", { required: true })}
                    {...(errors.exampleRequired && (
                      <span>This field is required</span>
                    ))}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>City / State</Form.Label>
                  <Form.Select
                    defaultValue="Rajshahi"
                    className="text-secondary"
                    {...register("city", { required: true })}
                    {...(errors.city && <span>This field is required</span>)}
                  >
                    <option>Dhaka</option>
                    <option>Rangpur</option>
                    <option>Rajshahi</option>
                    <option>Dinajpur</option>
                    <option>Mymensing</option>
                    <option>Khulna</option>
                    <option>Sylhet</option>
                    <option>Barisal</option>
                    <option>Comilla</option>
                    <option>Chittagong</option>
                    <option>Choose...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    placeholder="Bangladesh"
                    {...register("country", { required: true })}
                    {...(errors.country && <span>This field is required</span>)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="my-3" controlId="formGridAddress">
                <Form.Label>Detailed Address</Form.Label>
                <Form.Control
                  placeholder="Ward-7, Dhunat Pourashova, Dhunat, Bogra, Rajshahi, Bangladesh"
                  {...register("address", { required: true })}
                  {...(errors.address && <span>This field is required</span>)}
                />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Agree With terms and conditions"
                />
              </Form.Group>

              <Link to="/order">
                <Button
                  type="submit"
                  className="px-3 py-2 fw-bold btn-light-green"
                >
                  <i className="fas fa-clipboard-check text-warning me-2"></i>
                  Confirm
                </Button>
              </Link>
            </Form>
          </div>
        </Row>
      </Container>
     
    </>
  );
};

export default Order;
