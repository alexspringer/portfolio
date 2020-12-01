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
      <Container fluid className="mx-0 my-5 text-center">
        <h1> Safe_ </h1>
        <p class="lead text-muted">
          An Android lifestyle app to help users be active and engaged during
          the COVID-19 pandemic.
        </p>
      </Container>

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

      <Container fluid className="my-2 d-flex justify-content-around">
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-info">
          <Container className="my-3 py-3 text-center text-white">
            <h2 class="display-5">Home</h2>
            <p>Find available challenges and health points remaining.</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Home} alt="" />
        </Container>
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-light">
          <Container className="my-3 py-3 text-center">
            <h2 class="display-5">Profile</h2>
            <p> Show off level and weeks "survived".</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Profile} alt="" />
        </Container>
      </Container>

      <Container fluid className="my-2 d-flex justify-content-around">
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-light">
          <Container className="my-3 py-3 text-center">
            <h2 class="display-5">Challenges</h2>
            <p> Complete challenges, earn experience, and level up!</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Challenges} alt="" />
        </Container>
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-dark">
          <Container className="my-3 py-3 text-center text-white">
            <h2 class="display-5">Heatmap</h2>
            <p> Color coded zipcodes based on COVID-19 cases per zipcode</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Heatmap} alt="" />
        </Container>
      </Container>

      <Container fluid className="my-2 d-flex justify-content-around">
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-info">
          <Container className="my-3 py-3 text-center text-white">
            <h2 class="display-5">Settings: Before</h2>
            <p> Personalize theme and health point icons.</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Themes} alt="" />
        </Container>
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-light">
          <Container className="my-3 py-3 text-center">
            <h2 class="display-5">Settings: After</h2>
            <p> Using the arctic theme!</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={Settings} alt="" />
        </Container>
      </Container>

      <Container fluid className="my-2 d-flex justify-content-around">
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-light">
          <Container className="my-3 py-3 text-center">
            <h2 class="display-5">Home: After</h2>
            <p> Health icons are now hearts + arctic theme!</p>
          </Container>
          <img
            style={{ height: 640, width: 400 }}
            src={HomeScreenWithHearts}
            alt=""
          />
        </Container>
        <Container className="py-5 mx-2 d-flex flex-column align-items-center justify-content-center bg-dark">
          <Container className="my-3 py-3 text-center text-white">
            <h2 class="display-5">Bluetooth proximity detection</h2>
            <p> Getting to close to other devices causes health point loss.</p>
          </Container>
          <img style={{ height: 640, width: 400 }} src={GotToClose} alt="" />
        </Container>
      </Container>
    </Container>
  );
};

export default SafeSpaceScreen;
