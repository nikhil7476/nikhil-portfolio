import { useRouter } from "next/router";
import Head from "next/head";
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

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}services/`;
  const canonicalUrl = `${baseUrl}${service.slug}`;

  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.featuredImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content={service.featuredImage} />
      </Head>
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
