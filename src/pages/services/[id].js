import { useRouter } from "next/router";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import accordionData from "@/utils/accordionData";
import FaqAccordion from "@/components/FaqAccordion";
import { Container, Row, Col } from "react-bootstrap";
import servicesData from "@/utils/servicesData";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ServicesDetail() {
  const router = useRouter();
  const { id } = router.query;

  const service = servicesData.myservices.find((a) => a.slug === id);
  const serviceFaqs = accordionData.services[id] || [];

  if (!service) {
    return <p>Loading...</p>; // prevents undefined error
  }

  return (
    <>
      <div
        className="banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${service.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
        }}
      >
        <Container>
          <span>{service.subtitle}</span>
          <h1 className="fw-bold">{service.title}</h1>
          <ul className="breadcrumb d-flex align-items-center gap-2">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>{"/"}</li>
            <li>
              <Link href="/services" title="Services">
                Services
              </Link>
            </li>
            <li>{"/"}</li>
            <li>{service.title}</li>
          </ul>
        </Container>
      </div>
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
        <FaqAccordion data={serviceFaqs} />
      </section>
    </>
  );
}
