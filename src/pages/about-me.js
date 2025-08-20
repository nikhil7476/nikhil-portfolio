import React from "react";
import MetaHead from "@/components/MetaHead";
import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";

function About() {
  return (
    <>
      <MetaHead page="about" />
      <div>About</div>
      <FaqAccordion data={accordionData.about} />
    </>
  );
}

export default About;
