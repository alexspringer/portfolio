import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

//Images.
import Challenges from "../Assets/SafeSpace/Challenges.jpg";
import Heatmap from "../Assets/SafeSpace/Heatmap.jpg";
import Profile from "../Assets/SafeSpace/Profile.jpg";
import Home from "../Assets/SafeSpace/SafeSpaceHome.jpg";
import GotToClose from "../Assets/SafeSpace/GotToClose.jpg";
import HomeScreenWithHearts from "../Assets/SafeSpace/HomeScreenWithHearts.jpg";
import Settings from "../Assets/SafeSpace/Settings.jpg";
import Themes from "../Assets/SafeSpace/Themes.jpg";
import SafeSpaceIcon from "../Assets/SafeSpace/SafeSpaceIcon.png";

import JS from "../Assets/JS.png";
import Expo from "../Assets/Expo.png";
import ReactIcon from "../Assets/React.png";
import Firebase from "../Assets/Firebase.png";

const SafeSpaceScreen = (props) => {
  return (
    <Container fluid>
      <h1> Safe_ </h1>
      <p>
        An Android lifestyle app to help users be active and engaged during the
        COVID-19 pandemic.
      </p>
      <h2> Technology Used: </h2>

      <Row className="my-5">
        <Col>
          <a href="https://firebase.google.com/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={Firebase}
              />
              <Card.Body>
                <Card.Title className="text-center">Google Firebase</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="https://www.javascript.com/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" style={{ height: 200 }} src={JS} />
              <Card.Body>
                <Card.Title className="text-center"> JavaScript </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="https://reactnative.dev/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={ReactIcon} />
              <Card.Body>
                <Card.Title> React Native </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col>
          <a href="https://expo.io/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={Expo}
              />
              <Card.Body>
                <Card.Title> Expo.io </Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Container
        fluid
        className="bg-dark p-5 my-5 d-flex justify-content-around"
      >
        <img style={{ height: 800, width: 500 }} src={Home} alt="" />
        <img style={{ height: 800, width: 500 }} src={Profile} alt="" />
      </Container>

      <Container
        fluid
        className="bg-secondary p-5 my-5 d-flex justify-content-around"
      >
        <img style={{ height: 800, width: 500 }} src={Challenges} alt="" />
        <img style={{ height: 800, width: 500 }} src={Heatmap} alt="" />
      </Container>

      <Container
        fluid
        className="bg-dark p-5 my-5 d-flex justify-content-around"
      >
        <img style={{ height: 800, width: 500 }} src={GotToClose} alt="" />
        <img
          style={{ height: 800, width: 500 }}
          src={HomeScreenWithHearts}
          alt=""
        />
      </Container>

      <Container
        fluid
        className="bg-secondary p-5 my-5 d-flex justify-content-around"
      >
        <img style={{ height: 800, width: 500 }} src={Themes} alt="" />
        <img style={{ height: 800, width: 500 }} src={Settings} alt="" />
      </Container>

    </Container>
  );
};

export default SafeSpaceScreen;
