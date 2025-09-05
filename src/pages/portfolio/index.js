import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";

function Portfolio() {
  return (
    <>
      <MetaHead page="portfolio" />
      <Banner data={bannerData.portfolio} />
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <TestimonialCarousel data={testimonialData.portfolio} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FaqAccordion data={accordionData.portfolio} />
      </section>
    </>
  );
}

export default Portfolio;
