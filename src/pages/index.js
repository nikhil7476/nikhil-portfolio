import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import MetaHead from "@/components/MetaHead";
import HomeBanner from "@/components/HomeBanner";
import homeData from "@/utils/homeData";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import ContactForm from "@/components/ContactForm";
import ArticlesPreview from "@/components/ArticlesPreview";

function Home() {
  console.log(homeData.section1.subheading, "2345678sdfgh");

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
                src={homeData.section1.image}
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
              <span>{homeData.section1.subheading}</span>
              <h2>{homeData.section1.title}</h2>
              <hr />
              <p>{homeData.section1.description}</p>
              <Link
                href={homeData.section1.ctaLink}
                title="About Me"
                className="ctaButton"
              >
                {homeData.section1.ctaText} <FaArrowRightLong />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>{homeData.section2.subheading}</span>
              <h2>{homeData.section2.title}</h2>
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
                {homeData.section2.iconBox.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start gap-3 mb-3"
                  >
                    <div>{item.icon}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
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
              <Link
                href={homeData.section2.ctaLink}
                title="Services"
                className="ctaButton"
              >
                {homeData.section2.ctaText} <FaArrowRightLong />
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
