import { Button, Form } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";

function NewsletterForm() {
  return (
    <Form>
      <Form.Group className="d-flex mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Your Email" />
        <Button variant="primary" type="submit">
          <AiOutlineSend />
        </Button>
      </Form.Group>
    </Form>
  );
}

export default NewsletterForm;
