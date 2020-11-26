import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

const HomeScreen = (props) => {
  const [count, setCount] = useState(0);

  return (
    <Container
      fluid
      style={{ height: 1000 }}
      className="d-flex justify-content-center align-items-center"
    >
      <text> {count} </text>
      <Button onClick={() => setCount(count + 1)}> Yo </Button>
    </Container>
  );
};

export default HomeScreen;
