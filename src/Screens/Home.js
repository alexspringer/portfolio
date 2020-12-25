import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Portrait from "../Assets/Home/Portrait.jpg";
import NeakaneSummit from "../Assets/Home/NeakaneSummit.JPG";
import Neakane from "../Assets/Home/Neakane.JPG";
import FunnyPicture from "../Assets/Home/FunnyPicture.JPG";
import Kitties from "../Assets/Home/Kitties.PNG";
import CatVSquirl from "../Assets/Home/CatVSquirl.JPG";
import SmithRock from "../Assets/Home/SmithRock.JPG";
import WOW from "../Assets/Home/WoW.jpg";
import Bike from "../Assets/Home/MyBike.png";
import StHelensHike from "../Assets/Home/StHelensHike.JPG";
import Tyche from "../Assets/Home/Tyche.JPG";
import Edgy from "../Assets/Home/Edgy.JPG";

const HomeScreen = (props) => {
  return (
    <Container fluid>
      <Row className="text-center">
        <Col className="text-center">
          <h2 class="display-4 font-weight-normal">Hi! I'm Alex</h2>
          <p class="lead">
            I am a recent Computer Science graduate from Portland Oregon.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <img src={Portrait} style={{ margin: 10 }} />
      </Row>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        <img src={Neakane} style={{ margin: 10, width: 500, height: 665 }} />
        <img
          src={NeakaneSummit}
          style={{ margin: 10, width: 500, height: 665 }}
        />
        <img
          src={FunnyPicture}
          style={{ margin: 10, width: 500, height: 665 }}
        />
        <img src={CatVSquirl} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={SmithRock} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={Kitties} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={StHelensHike} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={Tyche} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={Edgy} style={{ margin: 10, width: 500, height: 665 }} />
        <img src={WOW} style={{ margin: 10, width: 1197, height: 665 }} />
      </Container>
    </Container>
  );
};

export default HomeScreen;
