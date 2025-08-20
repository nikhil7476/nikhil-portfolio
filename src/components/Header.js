import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} href="/" className="fw-bold">
          Nikhil Mishra
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} href="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about-me" className="mx-2">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} href="/services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="/portfolio" className="mx-2">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} href="/tools" className="mx-2">
              Tools
            </Nav.Link>
            <Nav.Link as={Link} href="/articles" className="mx-2">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} href="/contact-me" className="mx-2">
              Contact Me
            </Nav.Link>

            {/* Social Icons */}
            <div className="d-flex ms-lg-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaGithub />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
