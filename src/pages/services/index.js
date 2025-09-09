import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import servicesData from "@/utils/servicesData";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";

export default function Services() {
  return (
    <>
      <MetaHead page="services" />
      <Banner data={bannerData.service} />
      {/* Services Grid */}
      <section>
        <Container>
          <Row>
            <Col>
              <span>{servicesData.serviceMain.subheading}</span>
              <h2>{servicesData.serviceMain.title}</h2>
              <hr />
              <p>{servicesData.serviceMain.description}</p>
            </Col>
          </Row>
          <Row className="mb-3">
            {servicesData.myservices.map((service) => (
              <Col
                key={service.id}
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="mb-3"
              >
                <div>
                  <Link href={`/services/${service.slug}`}>
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      title={service.title}
                      width={450}
                      height={450}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="p-2 text-center">
                  <Link
                    href={`/services/${service.slug}`}
                    title={service.title}
                    className="text-light border-bottom"
                  >
                    {service.title} <FaArrowRight />
                  </Link>
                </div>
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
