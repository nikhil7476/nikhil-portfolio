// utils/homeBannerData.js
import { FaLaptopCode, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

const homeBannerData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Building scalable and modern web applications with React, Next.js, and MongoDB.",
    bgImage: "/website-assets/slide-1.jpg",
    icon: <FaLaptopCode size={40} />,
  },
  {
    id: 2,
    title: "Creative & Innovative Ideas",
    description:
      "Transforming ideas into reality with clean code, responsive UI, and seamless user experience.",
    bgImage: "/website-assets/slide-2.jpg",
    icon: <FaLightbulb size={40} />,
  },
  {
    id: 3,
    title: "Portfolio of Projects",
    description:
      "Explore my latest projects, case studies, and open-source contributions.",
    bgImage: "/website-assets/slide-3.jpg",
    icon: <FaProjectDiagram size={40} />,
  },
];

export default homeBannerData;
