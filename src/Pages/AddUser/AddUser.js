import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddUser = () => {
     //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
      event.preventDefault();

    fetch('https://murmuring-shelf-43649.herokuapp.com/allpackages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
       .then(data => {
           if(data.insertedId) {
               alert('User Added Successfully !')
           }
       })
    console.log(data)
  };
  
    return (
        <Container>
        <div style={{minHeight: '100vh'}}>
            <h2>This is add user uusing hook form</h2>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan"
            >
              <h2 className="mb-4 text-center">
                To Add A Package, Fill This Form !
              </h2>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Package Title</Form.Label>
                  <Form.Control
                    // value={`Goriber Bondhu`}
                    className="text-secondary fw-semi-bold"
                 
                    {...register("title", { required: true })}
                    {...(errors.name && <span>Title is required</span>)}
                  />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control
                    type="text"
                    // value={`Package er Pic`}
                    className="text-secondary fw-semi-bold"
                 
                    {...register("img", { required: true })}
                    {...(errors.email && <span>Img is required</span>)}
                  />
                </Form.Group>
              </Row>
                <Button
                  type="submit"
                  className="px-3 py-2 fw-bold btn-light-green"
                >
                  <i className="fas fa-clipboard-check text-warning me-2"></i>
                  Add Package
                </Button>
            </Form>
        </div>
        </Container>
    );
};

export default AddUser;