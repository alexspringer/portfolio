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
      <Row style={{ backgroundColor: "#020720" }} className=" p-5">
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
                A mobile chess application for both Android and iOS. (and c++
                prototype.)
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
      </Row>

      <Row className="bg-light p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <h1 class=""> Bitmap Filters </h1>
                <p style={{ width: "70%" }} class="">
                  A C++ app that edits bitmaps following procedures to add
                  various filters to images.
                </p>
              </Row>
              <Row>
                <Button className="mb-4">
                  <Link style={{ color: "white" }} to="/work/Bitmap">
                    Learn More!
                  </Link>
                </Button>
              </Row>
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
      </Row>

      <Row style={{ backgroundColor: "#020720" }} className="p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <h1 class=" text-light"> IRC Chat App </h1>
                <p style={{ width: "70%" }} class="text-light">
                  A simple chat app.
                </p>
              </Row>
              <Row>
                <Button className="mb-4">
                  <Link style={{ color: "white" }} to="/work/IRC">
                    Learn More!
                  </Link>
                </Button>
              </Row>
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
      </Row>

      <Row className="bg-dark p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <h1 class=" text-light"> Sports Scoreboard </h1>
                <p style={{ width: "70%" }} class="text-light">
                  A sports website that uses the ESPN api to display stats and
                  information about various teams and sports.
                </p>
              </Row>
              <Row>
                <Button className="mb-4">
                  <Link style={{ color: "white" }} to="/work/SportsScoreboard">
                    Learn More!
                  </Link>
                </Button>
              </Row>
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
      </Row>

      <Row className="bg-light p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <h1 class=""> XV6</h1>
              </Row>
              <Row>
                <p style={{ width: "70%" }} class="">
                  An operating system written in C.
                </p>
              </Row>
              <Row>
                <Button className="mb-4">
                  <Link style={{ color: "white" }} to="/work/XV6">
                    Learn More!
                  </Link>
                </Button>
              </Row>
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
      </Row>

      <Row style={{ backgroundColor: "#020720" }} className="p-5">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <h1 class="text-light"> DFA </h1>
              </Row>
              <Row>
                <p style={{ width: "70%" }} class="text-light">
                  A simulation of a deterministic finite automaton.
                </p>
              </Row>
              <Row>
                <Button className="mb-4">
                  <Link style={{ color: "white" }} to="/work/XV6">
                    Learn More!
                  </Link>
                </Button>
              </Row>
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
      </Row>
    </Container>
  );
};

export default WorkScreen;
