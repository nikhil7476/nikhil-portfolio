import React from "react";
import Image from "next/image";
import Link from "next/link";
import MetaHead from "@/components/MetaHead";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import ContactForm from "@/components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import { FaArrowRightLong } from "react-icons/fa6";
function About() {
  return (
    <>
      <MetaHead page="about" />
      <Banner data={bannerData.about} />
      <section>
        <Container>
          <Row>
            <Col>
              <span>About Me</span>
              <h2>Hi, {"I’m"} Nikhil Mishra</h2>
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
                src="/website-assets/nikhil-logo.jpeg"
                alt="Nikhil Mishra"
                title="Nikhil Mishra"
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
              <p>
                A passionate <strong>Full-Stack Developer</strong> with
                expertise in building modern, scalable, and user-friendly web
                applications. I love turning ideas into reality through clean
                code, smart design, and innovative problem-solving.
              </p>
              <p>
                With a strong background in{" "}
                <strong>
                  Next.js, MongoDB, React, and modern web technologies
                </strong>
                , I focus on creating dynamic applications that deliver both
                performance and great user experiences.
              </p>
              <p>
                Beyond coding, I enjoy exploring system design, database
                optimization, and API integrations that make projects reliable.
                When {"I’m"} not coding, {"I’m"} diving into tech trends or
                enjoying cultural & spiritual activities.
              </p>
              <p>
                {"Let’s"} collaborate and build something impactful together!
              </p>
              <Link href="/contact-me" title="Contact Me" className="ctaButton">
                Contact Me <FaArrowRightLong />
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
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/html5.png"
                alt="HTML5"
                title="HTML5"
                width={100}
                height={100}
              />
              <h3>HTML5</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/css3.png"
                alt="CSS3"
                title="CSS3"
                width={100}
                height={100}
              />
              <h3>CSS3</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/javascript.png"
                alt="JavaScript"
                title="JavaScript"
                width={100}
                height={100}
              />
              <h3>JavaScript</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/react.png"
                alt="React JS"
                title="React JS"
                width={100}
                height={100}
              />
              <h3>React JS</h3>
            </Col>
          </Row>
          <Row>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/next-js.png"
                alt="Next JS"
                title="Next JS"
                width={100}
                height={100}
              />
              <h3>Next JS</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/node-js.png"
                alt="Node JS"
                title="Node JS"
                width={100}
                height={100}
              />
              <h3>Node JS</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/wordpress.png"
                alt="WordPress"
                title="WordPress"
                width={100}
                height={100}
              />
              <h3>WordPress</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/php.png"
                alt="PHP"
                title="PHP"
                width={100}
                height={100}
              />
              <h3>PHP</h3>
            </Col>
          </Row>
          <Row>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/mysql.png"
                alt="MySQL"
                title="MySQL"
                width={100}
                height={100}
              />
              <h3>MySQL</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/python.png"
                alt="Python"
                title="Python"
                width={100}
                height={100}
              />
              <h3>Python</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/github.png"
                alt="GitHub"
                title="GitHub"
                width={100}
                height={100}
              />
              <h3>GitHub</h3>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="text-center align-content-center"
            >
              <Image
                src="/skill-assets/visual-studio-code.png"
                alt="VS Code"
                title="VS Code"
                width={100}
                height={100}
              />
              <h3>VS Code</h3>
            </Col>
          </Row>
        </Container>
      </section>
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
