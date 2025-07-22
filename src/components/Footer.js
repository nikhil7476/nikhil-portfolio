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
import NewsletterForm from "./NewsletterForm";

function Footer() {
  return (
    <>
      <section>
        <Container>
          <Row className="my-5">
            <Col xl={3} lg={3} md={6} sm={12} xs={12}>
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
            <Col xl={3} lg={3} md={6} sm={12} xs={12}>
              <h2>Contact</h2>
              <p>5919 Trussville Crossings Pkwy, Birmingham</p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="mailto:nikhil7476@gmail.com"
                    title="Mail Me"
                    className="text-decoration-none"
                  >
                    <FaEnvelope /> nikhil7476@gmail.com
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
            <Col xl={3} lg={3} md={6} sm={12} xs={12}>
              <h2>Useful Links</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/about-me"
                    title="About Me"
                    className="text-decoration-none"
                  >
                    About Me
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/services"
                    title="My Services"
                    className="text-decoration-none"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/portfolio"
                    title="My Portfolio"
                    className="text-decoration-none"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/aarticles"
                    title="My Articles"
                    className="text-decoration-none"
                  >
                    Articles
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact-me"
                    title="Contact Me"
                    className="text-decoration-none"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xs={12}>
              <h2>Newsletter</h2>
              <NewsletterForm />
              <ul className="list-unstyled d-flex gap-3">
                <li className="mb-2">
                  <Link
                    href="https://github.com/nikhil7476/"
                    title="GitHub"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.instagram.com/mishra_nikhil01/"
                    title="Instagram"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
                    title="LinkedIn"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="https://x.com/mishranikhil01/"
                    title="Twitter"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="my-3">
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="text-center"
            >
              <p>
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
