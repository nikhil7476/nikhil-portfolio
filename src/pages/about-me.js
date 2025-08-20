import React from "react";
import MetaHead from "@/components/MetaHead";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

function About() {
  return (
    <>
      <MetaHead page="about" />
      <Banner data={bannerData.about} />
      <div>About</div>
      <FaqAccordion data={accordionData.about} />
    </>
  );
}

export default About;
