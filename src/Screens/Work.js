import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//images
import gamestart from "../Assets/Foolsmate/gamestart.PNG";
import WhiteKing from "../Assets/Foolsmate/WhiteKing.png";
import SafeSpaceIcon from "../Assets/SafeSpace/SafeSpaceIcon.png";
import SafeSpaceHome from "../Assets/SafeSpace/SafeSpaceHome.jpg";

const WorkScreen = (props) => {
  return (
    <Container fluid>
      <Row className="bg-secondary p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col className="mr-4" xs={1}>
                  <img alt="king" src={WhiteKing} />
                </Col>
                <Col>
                  <h1 class="mt-2 text-light"> Foolsmate </h1>
                </Col>
              </Row>
              <p style={{ width: "70%" }} class="text-light">
                A mobile chess application for both Android and iOS.
              </p>
              <Button className="mb-4">
                <Link style={{ color: "white" }} to="/work/Foolsmate">
                  Learn More!
                </Link>
              </Button>
            </Col>
            <Col>
              <Container>
                <img
                  class="rounded float-right mr-5"
                  style={{ width: 300, height: 600 }}
                  alt="gamestart"
                  src={gamestart}
                />
              </Container>
            </Col>
          </Row>
        </Container>
        <Row></Row>
      </Row>

      <Row className="bg-dark p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col className="mr-4" xs={1}>
                  <img
                    style={{ width: 50, height: 50 }}
                    alt="safespace"
                    src={SafeSpaceIcon}
                  />
                </Col>
                <Col>
                  <h1 class=" text-light"> Safe_ </h1>
                </Col>
              </Row>
              <p style={{ width: "70%" }} class="text-light">
                A lifestyle app that keeps users active and engaged during the
                COVID-19 pandemic
              </p>
              <Button className="mb-4">
                <Link style={{ color: "white" }} to="/work/SafeSpace">
                  Learn More!
                </Link>
              </Button>
            </Col>
            <Col>
              <Container>
                <img
                  class="rounded float-right mr-5"
                  style={{ width: 300, height: 600 }}
                  alt="gamestart"
                  src={SafeSpaceHome}
                />
              </Container>
            </Col>
          </Row>
        </Container>
        <Row></Row>
      </Row>

      <Row>
        <h1> Bitmap Filters </h1>
      </Row>
      <Row>
        <h1> IRC Chat App</h1>
      </Row>
      <Row>
        <h1> XV6 </h1>
      </Row>
      <Row>
        <h1> Deterministic Finite Automaton </h1>
      </Row>
    </Container>
  );
};

export default WorkScreen;
