import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdAddLocationAlt } from "react-icons/md";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  return (
    <>
      <section>
        <Container>
          <Row className="my-5">
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3" >
              <Link href="/" title="Home">
                <Image
                  src="/nikhil-logo.jpeg"
                  width={460}
                  height={460}
                  title="Nikhil Mishra"
                  alt="Nikhil Mishra Logo"
                  style={{ width: "75%", height: "auto" }}
                />
              </Link>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3">
              <h3>Contact</h3>
              <ul className="list-unstyled">
                <li><MdAddLocationAlt /> 5919 Trussville Crossings Pkwy, Birmingham</li>
                <li className="mb-2">
                  <Link
                    href="mailto:nikhilmishra7476@gmail.com"
                    title="Mail Me"
                    className="text-decoration-none"
                  >
                    <FaEnvelope /> nikhilmishra7476@gmail.com
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="tel:+91-9027917476"
                    title="Call Me"
                    className="text-decoration-none"
                  >
                    <FaPhoneAlt /> +91-(902)-791-7476
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3" >
              <h3>Useful Links</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link href="/about-me" title="About Me">
                    About Me
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services" title="My Services">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/portfolio" title="My Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/articles" title="My Articles">
                    Articles
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact-me" title="Contact Me">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mb-3" >
              <h3>Follow Me</h3>
              <ul className="list-unstyled d-flex gap-3">
                <li className="mb-2">
                  <Link
                    href="https://github.com/nikhil7476/"
                    title="GitHub: nikhil7476"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/mishra_nikhil01/"
                    title="Instagram: mishra_nikhil01"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
                    title="LinkedIn: Nikhil Mishra"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://x.com/mishranikhil01/"
                    title="Twitter: mishranikhil01"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
              <h3>Subscribe</h3>
              <NewsletterForm />
            </Col>
          </Row>
          <Row className="mx-2 bg-light rounded p-2">
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="align-content-center"
            >
              <p className="text-center text-muted m-0">
                &copy;{new Date().getFullYear()} Portfolio is Proudly Designed &
                Developed by{" "}
                <Link
                  href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
                  title="Nikhil Mishra"
                  target="_blank"
                  className="text-decoration-none"
                >
                  @mishra_nikhil
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
