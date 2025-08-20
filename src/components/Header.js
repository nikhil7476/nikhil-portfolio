import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} href="/" className="fw-bold">
          MyPortfolio
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} href="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/projects" className="mx-2">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} href="/blog" className="mx-2">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" className="mx-2">
              Contact
            </Nav.Link>

            {/* Social Icons */}
            <div className="d-flex ms-lg-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FaGithub />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
