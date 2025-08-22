import React from "react";
import MetaHead from "@/components/MetaHead";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import ContactForm from "@/components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";

function About() {
  return (
    <>
      <MetaHead page="about" />
      <Banner data={bannerData.about} />
      <div>About</div>
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <span>Happy Clients</span>
              <h2>What My Client Say,</h2>
              <hr />
              <TestimonialCarousel data={testimonialData.about} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <span>Contact Me</span>
              <h2>Get in touch with me!</h2>
              <hr />
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FaqAccordion data={accordionData.about} />
      </section>
    </>
  );
}

export default About;
