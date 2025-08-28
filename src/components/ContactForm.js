// components/ContactForm.js

import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
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
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <span>Contact Me</span>
      <h2>Get in touch with me!</h2>
      <hr />
      <div className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FaPhoneAlt />
              </InputGroup.Text>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FaTag />
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FaCommentDots />
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Send Message <IoSend />
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
