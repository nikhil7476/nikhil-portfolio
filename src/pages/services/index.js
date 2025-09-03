import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import servicesData from "@/utils/servicesData";
import accordionData from "@/utils/accordionData";
import FaqAccordion from "@/components/FaqAccordion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";

export default function Services() {
  return (
    <>
      <MetaHead page="services" />
      <Banner data={bannerData.service} />
      {/* Services Grid */}
      <section>
        <Container className="my-5">
          <Row className="g-4">
            {servicesData.map((service) => (
              <Col key={service.id} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-semibold">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {service.metaDescription}
                    </Card.Text>
                    <Link
                      href={`/services/${service.slug}`}
                      passHref
                      legacyBehavior
                    >
                      <Button
                        variant="primary"
                        className="mt-auto d-flex align-items-center justify-content-center gap-2"
                      >
                        Read More <FaArrowRight />
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <TestimonialCarousel data={testimonialData.services} />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <FaqAccordion data={accordionData.services.main} />
      </section>
    </>
  );
}
