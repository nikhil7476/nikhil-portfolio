import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import contactData from "@/utils/contactData";
import ContactForm from "@/components/ContactForm";
import accordionData from "@/utils/accordionData";
import FaqAccordion from "@/components/FaqAccordion";

function Contact() {
  return (
    <>
      <MetaHead page="contact" />
      <Banner data={bannerData.contact} />
      <section>
        <Container>
          <Row>
            <Col>
              <span>{contactData.subheading}</span>
              <h2>{contactData.title}</h2>
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
              className="mb-3 align-content-center"
            >
              <p>{contactData.description}</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href={`mailto:${contactData.email}`}>
                    <FaMailBulk /> {contactData.email}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={`tel:${contactData.phone}`}>
                    <FaPhoneVolume /> {contactData.phone}
                  </Link>
                </li>
                <li className="mb-2">
                  <MdAddLocationAlt /> {contactData.address}
                </li>
              </ul>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-3 align-content-center"
            >
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
                src={contactData.mapLink}
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
