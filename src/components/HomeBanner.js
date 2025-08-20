// components/HomeBanner.js

import Link from "next/link";
import homeBannerData from "@/utils/homeBannerData";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <Carousel fade indicators={true} controls={true} interval={4000}>
      {homeBannerData.map((slide) => (
        <Carousel.Item key={slide.id}>
          <section
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              alignContent: "center",
            }}
          >
            <Container>
              <Row className="align-items-center">
                <Col className="text-center">
                  <span>{slide.subTitle}</span>
                  <h1>{slide.title}</h1>
                  <p className="text-center">{slide.description}</p>
                  <Link
                    href={slide.ctaLink}
                    title={slide.ctaText}
                    className="ctaButton"
                  >
                    {slide.ctaText}
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeBanner;
