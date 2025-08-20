// components/Banner.js

import { Container } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";

const Banner = ({ data }) => {
  return (
    <div
      className="banner d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "450px",
      }}
    >
      <Container>
        <span>{data.subHeading}</span>
        <h1 className="fw-bold">{data.heading}</h1>
        <Breadcrumbs items={data.breadcrumb} />
      </Container>
    </div>
  );
};

export default Banner;
