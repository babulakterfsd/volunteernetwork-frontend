import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const UpdatePack = () => {
    // const [package, setpackage] = useState({})
    const {packageId} = useParams();
    const history = useHistory();
    const redirect_uri =  `/DetailedService/${packageId}`;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     

     const onSubmit = (data, event) => {
         console.log(data);
        event.preventDefault();
        const url = `https://murmuring-shelf-43649.herokuapp.com/DetailedService/updatepack/${packageId}`

        fetch(url, {
          method: 'PUT',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(data)
        }) 
        .then(res => res.json())
         .then(data => {
           if(data.modifiedCount > 0) {
             alert('Pack Updated Successfully !')
             history.push(redirect_uri);
           }
         })
    };

    return (
        <Container>
        <div style={{minHeight: '100vh'}}>
            <h2>Update package of ID : {packageId}</h2>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan"
            >
              <h2 className="mb-4 text-center">
                To Update This Package, Fill This Form !
              </h2>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Package Title</Form.Label>
                  <Form.Control
                    placeholder={`Title`}
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
                    placeholder={`img url`}
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
                  Update Package
                </Button>
            </Form>
        </div>
        </Container>
    );
};

export default UpdatePack;