import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Images.
import BishopMove from "../Assets/Foolsmate/BishopMovement.PNG";
import creategame from "../Assets/Foolsmate/creategame.PNG";
import Forfeit from "../Assets/Foolsmate/Forfeit.PNG";
import FreshBoard from "../Assets/Foolsmate/FreshBoard.PNG";
import KingMovement from "../Assets/Foolsmate/KingMovement.PNG";
import KnightMovement from "../Assets/Foolsmate/KnightMovement.PNG";
import Matchmaking from "../Assets/Foolsmate/Matchmaking.PNG";
import MatchmakingWithActiveGame from "../Assets/Foolsmate/MatchmakingWithActiveGame.PNG";
import PawnMovement from "../Assets/Foolsmate/PawnMovement.PNG";
import QueenMovement from "../Assets/Foolsmate/QueenMovement.PNG";
import RookMovement from "../Assets/Foolsmate/RookMovement.PNG";
import Victory from "../Assets/Foolsmate/Victory.PNG";
import waitingforopponent from "../Assets/Foolsmate/waitforopp.PNG";

//Built with images
import JS from "../Assets/JS.png";
import Expo from "../Assets/Expo.png";
import ReactIcon from "../Assets/React.png";
import C from "../Assets/C++.png";
import nodejs from "../Assets/nodejslogo.png";
import expresslogo from "../Assets/expresslogo.png";
import socketiologo from "../Assets/socketiologo.png";

import GalleryRow from "../Components/GalleryRow.js";
import GalleryItem from "../Components/GalleryItem.js";

const FoolsmateScreen = (props) => {
  return (
    <Container fluid>
      <Container fluid className="p-5 mx-0 my-5 text-center">
        <h1> Foolsmate </h1>
        <p class="lead text-muted">
          A mobile chess app for both Android and iOS.
        </p>
        <Button href="https://github.com/alexspringer/FoolsMate">
          Go to Github.
        </Button>
      </Container>

      <Row className="my-5">
        <Col className="d-flex justify-content-center">
          <a href="https://nodejs.org/en//">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={nodejs}
              />
              <Card.Body>
                <Card.Title className="text-center">Node.js</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col className="d-flex justify-content-center">
          <a href="https://expressjs.com/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={expresslogo}
              />
              <Card.Body>
                <Card.Title className="text-center">Express</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col className="d-flex justify-content-center">
          <a href="https://socket.io/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={socketiologo}
              />
              <Card.Body>
                <Card.Title className="text-center">Socket.io</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>

      <Row className="my-5">
        <Col className="d-flex justify-content-center">
          <a href="https://www.cplusplus.com/">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ width: 200, height: 200 }}
                variant="top"
                src={C}
              />
              <Card.Body>
                <Card.Title className="text-center">C++</Card.Title>
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

      <Container className="p-5 d-flex flex-column align-items-center justify-content-center my-5 text-center">
        <h1> Extra Info: </h1>
        <p style={{ width: "70%" }} class="lead text-muted">
          Foolsmate began as a C++ project! Typical I write my C++ programs on
          my university's Linux machines to avoid setting up an environment for
          C++ on my own desktop. Due to this, I was unable to download and setup
          the necessary prerequisites to run and use wxWidgets, a GUI Library
          that can be used with C++. Thus I ported the chess engine I made to
          JavaScript.
        </p>
        <Button href="https://github.com/alexspringer/Bitmap-filters"> Check it Out on Github </Button>
      </Container>

      <GalleryRow>
        <GalleryItem
          title="Matchmaking"
          desc="No active games yet so create a game and play!"
          img={Matchmaking}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="Join a Game"
          desc="If a game already exists, feel free to jump in and play."
          img={MatchmakingWithActiveGame}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Create a Game"
          desc="Enter a game name that will be displayed to other players."
          img={creategame}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="New Game Created"
          desc="A fresh game, we just need to wait for an opponent."
          img={waitingforopponent}
          scheme="dark"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Game Over"
          desc="You won! Congtrats"
          img={Victory}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="Forfeit"
          desc="Your opponent gave up."
          img={Forfeit}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Opponent Joined"
          desc="Game on."
          img={FreshBoard}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="Pawn Movement"
          desc="En passant and pawn promotion also supported."
          img={PawnMovement}
          scheme="dark"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Rook Movement"
          desc=""
          img={RookMovement}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="Knight Movement"
          desc=""
          img={KnightMovement}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Bishop Movement"
          desc=""
          img={BishopMove}
          scheme="light"
          imgWidth={362}
          imgHeight={724}
        />
        <GalleryItem
          title="King Movement"
          desc="Castling is also supported"
          img={KingMovement}
          scheme="dark"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>

      <GalleryRow>
        <GalleryItem
          title="Queen Movement"
          desc=""
          img={QueenMovement}
          scheme="blue"
          imgWidth={362}
          imgHeight={724}
        />
      </GalleryRow>
    </Container>
  );
};

export default FoolsmateScreen;
