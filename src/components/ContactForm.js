// components/ContactForm.js

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaTag, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            <FaUser className="me-2" /> Name
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <FaEnvelope className="me-2" /> Email
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <FaTag className="me-2" /> Subject
          </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <FaCommentDots className="me-2" /> Message
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
