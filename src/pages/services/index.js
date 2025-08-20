import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";

export default function Services() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Client Feedback</h2>
      <TestimonialCarousel data={testimonialData.services} />
    </div>
  );
}
