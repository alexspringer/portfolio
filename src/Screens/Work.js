import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//images
import gamestart from "../Assets/Foolsmate/FreshBoard.PNG";
import WhiteKing from "../Assets/Foolsmate/WhiteKing.png";
import SafeSpaceIcon from "../Assets/SafeSpace/SafeSpaceIcon.png";
import SafeSpaceHome from "../Assets/SafeSpace/SafeSpaceHome.jpg";
import bear32 from "../Assets/Bitmap/bear1_32.bmp";
import bear32Cell from "../Assets/Bitmap/bear1_32_cell.bmp";
import Scroreboard from "../Assets/Scoreboard.png";

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
              </Row>
              <Row>
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
                  alt="og bear"
                  src={bear32Cell}
                />
              </Container>
              <Container>
                <img
                  class="rounded float-right mr-5"
                  style={{ width: 300, height: 600 }}
                  alt="og bear"
                  src={bear32}
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>

      <Row style={{ backgroundColor: "#020720" }} className="p-5">
        <Container fluid>
          <Row style={{ height: 600 }}>
            <Col>
              <Row>
                <h1 class=" text-light"> Sports Scoreboard </h1>
              </Row>
              <Row>
                <p style={{ width: "70%" }} class="text-light">
                  A sports website that uses the ESPN api to display stats and
                  information about various teams and sports. (Takes a few
                  moments to load the website)
                </p>
              </Row>
              <Row>
                <Button
                  href="https://cs565sportsscoreboard.herokuapp.com/"
                  className="mb-4 mr-5"
                >
                  Go to Website!
                </Button>
                <Button
                  href="https://github.com/CS465-565-Fall19-Group-Project/SportsScoreboard"
                  className="mb-4"
                >
                  Go to Github.
                </Button>
              </Row>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <img alt="gamestart" src={Scroreboard} />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default WorkScreen;
