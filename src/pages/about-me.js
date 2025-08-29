import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import aboutData from "@/utils/aboutData";
import CountUp from "react-countup";
import { aboutStats } from "@/utils/aboutData";
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
              className="mb-3 align-content-center"
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
              className="mb-3 align-content-center"
            >
              <p>{aboutData.about.description}</p>
              <h3>{aboutData.about.highlightHeading}</h3>
              <Row>
                {aboutData.about.highlights.map((highlight, index) => (
                  <Col
                    key={index}
                    xl={4}
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    className="mb-3"
                  >
                    <li>{highlight}</li>
                  </Col>
                ))}
              </Row>
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
<section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {aboutStats.map((stat) => (
          <div
            key={stat.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <Row>
                <Col>
                  <span>{aboutData.myExperience.subheading}</span>
                  <h2>{aboutData.myExperience.title}</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                {aboutData.myExperience.experience.map((experience) => (
                  <Col
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    key={experience.id}
                    className="mb-3 align-content-center"
                  >
                    <span>{experience.duration}</span>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <Row>
                <Col>
                  <span>{aboutData.myEducation.subheading}</span>
                  <h2>{aboutData.myEducation.title}</h2>
                  <hr />
                </Col>
              </Row>
              <Row>
                {aboutData.myEducation.education.map((education) => (
                  <Col
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    key={education.id}
                    className="mb-3 align-content-center"
                  >
                    <span>{education.duration}</span>
                    <h3>{education.degree}</h3>
                    <p>{education.institution}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>{aboutData.techSection.subheading}</span>
              <h2>{aboutData.techSection.title}</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            {aboutData.techSection.technology.map((tech) => (
              <Col
                key={tech.id}
                xl={3}
                lg={3}
                md={6}
                sm={6}
                xs={6}
                className="mb-3 text-center align-content-center"
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
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
              <TestimonialCarousel data={testimonialData.about} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-3">
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
