// components/FaqAccordion.js

import { Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const FaqAccordion = ({ data }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <Accordion activeKey={activeKey} flush>
        {data.map((item, index) => (
          <Accordion.Item
            eventKey={index}
            key={item.id || index}
            className="mb-3"
          >
            <Accordion.Header onClick={() => handleToggle(index)}>
              {activeKey === index ? (
                <FaMinus className="mx-2" />
              ) : (
                <FaPlus className="mx-2" />
              )}{" "}
              {item.title}
            </Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default FaqAccordion;
