// components/NewsletterForm.js

import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="newsletter-box p-4 rounded">
      <h5 className="fw-bold mb-3">Subscribe to Our Newsletter</h5>
      <p className="small text-muted">
        Get the latest updates, blogs, and projects delivered to your inbox.
      </p>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>
            <FaEnvelope />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            Subscribe
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default NewsletterForm;
