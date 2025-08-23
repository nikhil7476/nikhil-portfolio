import React from "react";
import MetaHead from "@/components/MetaHead";
import HomeBanner from "@/components/HomeBanner";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckboxOutline } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import ArticlesPreview from "@/components/ArticlesPreview";

function Home() {
  return (
    <>
      <MetaHead page="home" />
      <HomeBanner />
      <section>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col
              xl={5}
              lg={5}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <Image
                src="/website-assets/about-me.png"
                alt="about-me"
                title="About Me"
                width={500}
                height={600}
                className="img-fluid rounded"
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
              <span>About Me</span>
              <h2>Smart IT Solutions for Smarter Business Growth.</h2>
              <hr />
              <p>
                At Nimitech, {"we’re"} a tight-knit team of passionate codes and
                digital marketing experts from around the globe. With over 50
                talented individuals across 5 countries, {"we’re"} ready to
                tackle any challenge in the field of software development. Our
                diverse perspectives and deep experience ensure that your
                campaigns are crafted with precision and delivered with impact.
              </p>
              <Link href="/about-me" title="About Me" className="ctaButton">
                Know More About Me <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>Why Me</span>
              <h2>Why Choose Nikhil Mishra</h2>
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
              <div>
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div>
                    <IoMdCheckboxOutline />
                  </div>
                  <div>
                    <h3>Quality First</h3>
                    <p>
                      We deliver reliable, high-performing solutions with a
                      focus on precision and best practices.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div>
                    <GiScooter />
                  </div>
                  <div>
                    <h3>On-Time Delivery</h3>
                    <p>
                      Your deadlines matter. We ensure timely delivery with
                      clear, consistent updates.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div>
                    <FaTools />
                  </div>
                  <div>
                    <h3>Scalable Solutions</h3>
                    <p>
                      Our custom-built solutions grows with your business and
                      adapts to your future needs.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <Image
                src="/website-assets/why-choose-us.jpg"
                alt="why-me"
                title="Why Me"
                width={666}
                height={600}
                className="img-fluid rounded"
              />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/services" title="Services" className="ctaButton">
                Explore My Services <FaArrowRightLong />
              </Link>
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
              <TestimonialCarousel data={testimonialData.home} />
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
        <Container>
          <Row>
            <Col>
              <span>Latest Articles</span>
              <h2>Read My Latest Articles & News</h2>
              <hr />
              <p>
                Stay updated with the latest trends and insights in web
                development and digital marketing through my articles and news
                updates.
              </p>
              <ArticlesPreview />
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Link href="/articles" title="Articles" className="ctaButton">
                Explore Articles <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
