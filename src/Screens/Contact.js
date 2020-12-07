import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const ContactScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const screenHeight = window.innerHeight;
  console.log(screenHeight);

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, message: message }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  return (
    <Container
      style={{ minHeight: screenHeight }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "60%" }} className="p-5">
        <h2 class="p-2 mb-3 text-center"> Contact</h2>
        <p> Fill out the form below or email me at alexspringer756@gmail.com</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="contact-form">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={onNameChange}
              id="name"
              type="text"
              placeholder=""
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={onEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="contact-form-comments">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={onMessageChange} />
          </Form.Group>
          <Button type="submit"> Submit </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ContactScreen;
