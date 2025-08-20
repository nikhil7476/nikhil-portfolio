import React from "react";
import MetaHead from "@/components/MetaHead";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";

function Services() {
  return (
    <>
      <MetaHead page="services" />
      <div>Services</div>
      <TestimonialCarousel data={testimonialData.services} />
    </>
  );
}

export default Services;
