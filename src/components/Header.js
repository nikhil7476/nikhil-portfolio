import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <Navbar
      expand="lg" // Better breakpoint for responsiveness (you can change sm, md, lg, xl)
      fixed="top"
      className="navbar-transparent"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="/"
          title="Nikhil Mishra"
          className="text-light fw-bold"
        >
          <Image
            src="/nikhil-logo.jpeg"
            width={50}
            height={50}
            title="Nikhil Mishra"
            alt="Nikhil Mishra Logo"
            className="img rounded"
          />{" "}
          NIKHIL MISHRA
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-dark fw-bold"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-light">
              <Link
                href="/"
                title="Nikhil Mishra"
                className="text-light fw-bold"
              >
                <Image
                  src="/nikhil-logo.jpeg"
                  width={50}
                  height={50}
                  title="Nikhil Mishra"
                  alt="Nikhil Mishra Logo"
                  className="img rounded"
                />{" "}
                NIKHIL MISHRA
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="/" title="Home" className="text-light mx-2">
                Home
              </Nav.Link>
              <Nav.Link
                href="/about-me"
                title="About Me"
                className="text-light mx-2"
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="/services"
                title="Services"
                className="text-light mx-2"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
                title="Portfolio"
                className="text-light mx-2"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link href="/tools" title="Tools" className="text-light mx-2">
                Tools
              </Nav.Link>
              <Nav.Link
                href="/articles"
                title="Articles"
                className="text-light mx-2"
              >
                Articles
              </Nav.Link>
              <Nav.Link
                href="/contact-me"
                title="Contact Me"
                className="text-light mx-2"
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
