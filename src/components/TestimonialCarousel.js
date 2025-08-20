"use client";
import { Carousel } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCarousel = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Carousel interval={5000} indicators={true} controls={true}>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="d-flex flex-column align-items-center text-center p-4">
            <FaQuoteLeft className="text-primary mb-3" size={28} />
            <p className="mb-3 fst-italic">"{item.message}"</p>
            <img
              src={item.image}
              alt={item.name}
              className="rounded-circle mb-3"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <h5 className="mb-0">{item.name}</h5>
            <small className="text-muted">{item.role}</small>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
