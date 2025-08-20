import TestimonialCarousel from "@/components/TestimonialCarousel";
import testimonialData from "@/utils/testimonialData";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

export default function Services() {
  return (
    <>
      <MetaHead page="services" />
      <Banner data={bannerData.service} />
      <div className="container py-5">
        <h2 className="mb-4 text-center">Client Feedback</h2>
        <TestimonialCarousel data={testimonialData.services} />
      </div>
    </>
  );
}
