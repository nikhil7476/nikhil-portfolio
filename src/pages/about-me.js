import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import aboutData from "@/utils/aboutData";
import ContactForm from "@/components/ContactForm";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";

function About() {
  return (
    <>
      <MetaHead page="about" />
      <Banner data={bannerData.about} />
      <section>
        <Container>
          <Row>
            <Col>
              <span>{aboutData.about.subheading}</span>
              <h2>{aboutData.about.title}</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col
              xl={5}
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <Image
                src={aboutData.about.image}
                alt={aboutData.about.imageAlt}
                title={aboutData.about.imageTitle}
                width={460}
                height={460}
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <p>{aboutData.about.description}</p>
              <Link
                href={aboutData.about.ctaLink}
                title={aboutData.about.ctaText}
                className="ctaButton"
              >
                {aboutData.about.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>Tech Stack</span>
              <h2>My Technical Skills</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            {aboutData.technology.map((tech) => (
              <Col
                key={tech.id}
                xl={3}
                lg={3}
                md={6}
                sm={6}
                xs={6}
                className="text-center align-content-center"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  width={75}
                  height={75}
                  className="mb-2"
                />
                <p>{tech.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <TestimonialCarousel data={testimonialData.about} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
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
