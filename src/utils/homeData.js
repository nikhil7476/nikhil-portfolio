import { IoMdCheckboxOutline } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { FaTools } from "react-icons/fa";

const homeData = {
  section1: {
    subheading: "About Me",
    title: "Smart IT Solutions for Smarter Business Growth.",
    description:
      "At Nimitech, we’re a tight-knit team of passionate codes and digital marketing experts from around the globe. With over 50 talented individuals across 5 countries, we’re ready to tackle any challenge in the field of software development. Our diverse perspectives and deep experience ensure that your campaigns are crafted with precision and delivered with impact.",
    ctaText: "Know More About Me",
    ctaLink: "/about-me",
    image: "/website-assets/about-me.png",
    imageAlt: "about-me",
    imageTitle: "About Me",
  },
  section2: {
    subheading: "Why Me",
    title: "Why Choose Nikhil Mishra",
    ctaText: "Explore My Services",
    ctaLink: "/services",
    image: "/website-assets/why-choose-us.jpg",
    imageAlt: "why-me",
    imageTitle: "Why Me",
    iconBox: [
      {
        icon: <IoMdCheckboxOutline />,
        title: "Quality First",
        description:
          "We deliver reliable, high-performing solutions with a focus on precision and best practices.",
      },
      {
        icon: <GiScooter />,
        title: "On-Time Delivery",
        description:
          "Your deadlines matter. We ensure timely delivery with clear, consistent updates.",
      },
      {
        icon: <FaTools />,
        title: "Scalable Solutions",
        description:
          "Our custom-built solutions grows with your business and adapts to your future needs.",
      },
    ],
  },
  articleSection: {
    subheading: "Latest Articles",
    title: "Read My Latest Articles & News",
    description:
      "Stay updated with the latest trends and insights in web development and digital marketing through my articles and news updates.",
    ctaText: "Explore Articles",
    ctaLink: "/articles",
  },
};

export default homeData;
