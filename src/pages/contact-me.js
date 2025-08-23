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
        <Container>
          <Row>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.4902378177241!2d81.02342967396466!3d26.844919848530484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1755949820528!5m2!1sen!2sin"
                width="1000"
                height="350"
                style={{ border: "0", width: "100%" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
