// components/HomeBanner.js
import { Carousel } from "react-bootstrap";
import homeBannerData from "@/utils/homeBannerData";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <Carousel fade indicators={true} controls={true} interval={4000}>
      {homeBannerData.map((slide) => (
        <Carousel.Item key={slide.id}>
          {/* Background Image */}
          <div
            className="banner d-flex justify-content-center align-items-center text-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              position: "relative",
            }}
          >
            {/* Dark/Light Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
              }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 text-center max-w-3xl p-6 rounded-2xl"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
                boxShadow: "0 4px 12px var(--shadow)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: "2rem",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {slide.icon}
              </span>
              <h1 style={{ color: "var(--heading)" }}>{slide.title}</h1>
              <p style={{ color: "var(--text)" }}>{slide.description}</p>
            </motion.div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeBanner;
