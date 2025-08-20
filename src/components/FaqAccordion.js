"use client"; // for Next.js App Router
import { Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const FaqAccordion = ({ data }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion activeKey={activeKey}>
      {data.map((item, index) => (
        <Accordion.Item
          eventKey={index.toString()}
          key={item.id || index}
          className="mb-2"
        >
          <Accordion.Header onClick={() => handleToggle(index.toString())}>
            <span className="flex items-center gap-2">
              {activeKey === index.toString() ? (
                <FaMinus className="text-primary" />
              ) : (
                <FaPlus className="text-primary" />
              )}
              {item.title}
            </span>
          </Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
