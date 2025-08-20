import FaqAccordion from "@/components/FaqAccordion";
import accordionData from "@/utils/accordionData";

export default function About() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">About Me</h2>
      <FaqAccordion data={accordionData.about} />
    </div>
  );
}
