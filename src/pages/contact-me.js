import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <>
      <MetaHead page="contact" />
      <Banner data={bannerData.contact} />
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}></Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
