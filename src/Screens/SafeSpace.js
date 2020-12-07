import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Images.
import Challenges from "../Assets/SafeSpace/Challenges.jpg";
import Heatmap from "../Assets/SafeSpace/Heatmap.jpg";
import Profile from "../Assets/SafeSpace/Profile.jpg";
import Home from "../Assets/SafeSpace/SafeSpaceHome.jpg";
import GotToClose from "../Assets/SafeSpace/GotToClose.jpg";
import HomeScreenWithHearts from "../Assets/SafeSpace/HomeScreenWithHearts.jpg";
import Settings from "../Assets/SafeSpace/Settings.jpg";
import Themes from "../Assets/SafeSpace/Themes.jpg";

import JS from "../Assets/JS.png";
import Expo from "../Assets/Expo.png";
import ReactIcon from "../Assets/React.png";
import Firebase from "../Assets/Firebase.png";

import GalleryRow from "../Components/GalleryRow.js";
import GalleryItem from "../Components/GalleryItem.js";

const SafeSpaceScreen = (props) => {
  return (
    <Container fluid>
      <Container fluid className=" p-5 mx-0 my-5 text-center">
        <h1> Safe_ </h1>
        <p class="lead text-muted">
          An Android lifestyle app to help users be active and engaged during
          the COVID-19 pandemic.
        </p>
        <Button href="https://github.com/trither/capstone-spring-summer-2020">
          Go to Github.
        </Button>
      </Container>

      <Row className="my-5">
        <Col className="d-flex justify-content-center">
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

        <Col className="d-flex justify-content-center">
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

        <Col className="d-flex justify-content-center">
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

        <Col className="d-flex justify-content-center">
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

      <GalleryRow>
        <GalleryItem
          title="Home"
          desc="Find available challenges and health points remaining."
          img={Home}
          scheme="blue"
          imgWidth={400}
          imgHeight={640}
        />
        <GalleryItem
          title="Profile"
          desc="Show off level and weeks 'survived'."
          img={Profile}
          scheme="light"
          imgWidth={400}
          imgHeight={640}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Challenges"
          desc="Complete challenges, earn experience, and level up!"
          img={Challenges}
          scheme="light"
          imgWidth={400}
          imgHeight={640}
        />
        <GalleryItem
          title="Heatmap"
          desc="Color coded zipcodes based on COVID-19 cases per zipcode."
          img={Heatmap}
          scheme="dark"
          imgWidth={400}
          imgHeight={640}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Settings: Before"
          desc="Personalize theme and health point icons."
          img={Themes}
          scheme="blue"
          imgWidth={400}
          imgHeight={640}
        />
        <GalleryItem
          title="Settings: After"
          desc="Using the arctic theme!"
          img={Settings}
          scheme="light"
          imgWidth={400}
          imgHeight={640}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Home: After"
          desc="Health icons are now hearts + arctic theme!"
          img={HomeScreenWithHearts}
          scheme="light"
          imgWidth={400}
          imgHeight={640}
        />
        <GalleryItem
          title="Bluetooth Proximity Detection"
          desc="Getting to close to other devices causes health point loss."
          img={GotToClose}
          scheme="dark"
          imgWidth={400}
          imgHeight={640}
        />
      </GalleryRow>
    </Container>
  );
};

export default SafeSpaceScreen;
