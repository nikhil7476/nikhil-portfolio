import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";
import accordionData from "@/utils/accordionData";
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";

function Contact() {
  return (
    <>
      <MetaHead page="contact" />
      <Banner data={bannerData.contact} />
      <section>
        <Container>
          <Row>
            <Col>
              <span>Get in Touch With Us</span>
              <h2>Your Next Digital Solution Starts Here</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <p>
                Whether {"you’re"} looking for a new website, a custom software
                solution, or digital marketing services, {"we’re"} here to help.
                Fill out the form below or reach out directly, and {"we’ll"} get
                back to you as soon as possible.
              </p>
              <ul className="list-unstyled">
                <li>
                  <Link href="mailto:nikhil9027917476@gmail.com">
                    <FaMailBulk /> nikhil9027917476@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+91-9027917476">
                    <FaPhoneVolume /> +91-(902)-791-7476
                  </Link>
                </li>
                <li>
                  <MdAddLocationAlt /> Lucknow, Uttar Pradesh, India - 226010
                </li>
              </ul>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FaqAccordion data={accordionData.contact} />
      </section>
    </>
  );
}

export default Contact;
