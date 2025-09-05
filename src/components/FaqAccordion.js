// components/FaqAccordion.js

import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const FaqAccordion = ({ data }) => {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container>
      <Row>
        <Col xl={5} lg={5} md={6} sm={12} xs={12} className="mb-3">
          <Image
            src="/website-assets/faqs.png"
            alt="FAQs-Image"
            title="FAQs"
            width={350}
            height={350}
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col
          xl={7}
          lg={7}
          md={6}
          sm={12}
          xs={12}
          className="mb-3 align-content-center"
        >
          <span>FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <hr />
          <Accordion activeKey={activeKey} flush>
            {data.map((item, idx) => (
              <Accordion.Item
                eventKey={String(idx)}
                key={item.id || idx}
                className="mb-3"
              >
                <Accordion.Header onClick={() => handleToggle(String(idx))}>
                  {activeKey === String(idx) ? (
                    <FaMinus className="mx-2" />
                  ) : (
                    <FaPlus className="mx-2" />
                  )}
                  {item.title}
                </Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqAccordion;
