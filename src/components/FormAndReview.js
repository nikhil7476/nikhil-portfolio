import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";
import TestimonialCarousel from "./TestimonialCarousel";

function FormAndReview() {
  return (
    <>
      <Container>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <span>Happy Clients</span>
            <h2>What My Client Say,</h2>
            <hr />
            <TestimonialCarousel />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <span>Contact Me</span>
            <h2>Get in touch with me!</h2>
            <hr />
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormAndReview;
