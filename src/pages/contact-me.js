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

function Contact() {
  return (
    <>
      <MetaHead page="contact" />
      <Banner data={bannerData.contact} />
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <p>
                Whether {"you’re"} looking for a new website, a custom software
                solution, or digital marketing services, {"we’re"} here to help.
                Fill out the form below or reach out directly, and {"we’ll"} get
                back to you as soon as possible.
              </p>
              <div>
                <div></div>
                <div>
                  <h3>Mail Me</h3>
                  <Link href="mailto:nikhilmishra7476@gmail.com">
                    nikhilmishra7476@gmail.com
                  </Link>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h3>Call Me</h3>
                  <Link href="mailto:nikhilmishra7476@gmail.com">
                    nikhilmishra7476@gmail.com
                  </Link>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h3>Reach Me</h3>
                  <Link href="mailto:nikhilmishra7476@gmail.com">
                    nikhilmishra7476@gmail.com
                  </Link>
                </div>
              </div>
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
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <Image
                src="/website-assets/faqs.png"
                alt="FAQs-Image"
                title="FAQs"
                width={350}
                height={350}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <span>FAQs</span>
              <h2>Frequently Asked Questions</h2>
              <hr />
              <FaqAccordion data={accordionData.about} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
