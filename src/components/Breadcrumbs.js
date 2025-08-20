// components/Breadcrumbs.js

import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          linkAs={Link}
          href={item.href}
          active={index === items.length - 1}
        >
          {index === 0 ? <FaHome className="me-1" /> : null}
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
