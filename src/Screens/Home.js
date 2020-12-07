import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const HomeScreen = (props) => {
  return (
    <Container
      fluid
      style={{ height: 1000 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Row className="text-center">
        <Col className="position-relative p-3 p-md-5 m-md-3 text-center">
          <h2 class="display-4 font-weight-normal">Hi! I'm Alex</h2>
          <p class="lead">
            I am a recent Computer Science graduate from Portland Oregon.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
