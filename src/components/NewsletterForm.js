// components/NewsletterForm.js

import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { HiPaperAirplane } from "react-icons/hi2";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="newsletter-box">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            <HiPaperAirplane />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default NewsletterForm;
