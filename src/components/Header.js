import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand
          as={Link}
          href="/"
          title="Nikhil Mishra"
          className="text-light fw-bold"
        >
          Nikhil Mishra
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              as={Link}
              href="/"
              title="Home"
              className="text-light mx-2"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/about-me"
              title="About Me"
              className="text-light mx-2"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/services"
              title="Services"
              className="text-light mx-2"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/portfolio"
              title="Portfolio"
              className="text-light mx-2"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/tools"
              title="Tools"
              className="text-light mx-2"
            >
              Tools
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/articles"
              title="Articles"
              className="text-light mx-2"
            >
              Articles
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/contact-me"
              title="Contact Me"
              className="text-light mx-2"
            >
              Contact Me
            </Nav.Link>

            {/* Social Icons */}
            <div className="d-flex ms-lg-3">
              <Link
                href="https://github.com/nikhil7476/"
                title="GitHub: nikhil7476"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.instagram.com/mishra_nikhil01/"
                title="Instagram: mishra_nikhil01"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nikhil-mishra-664672180/"
                title="LinkedIn: Nikhil Mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://x.com/mishranikhil01/"
                title="Twitter: mishranikhil01"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaTwitter />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
