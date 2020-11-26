import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const FoolsmateScreen = (props) => {
  return (
    <Container fluid>
              <h1> Foolsmate </h1>
              <p>
                A mobile chess application for both Android and iOS. The project
                was written in javascript using React Native and was
                bootstrapped using expo.io (an open source toolchain built
                around React Native). The backend of the app uses node.js,
                express, and socket.io to allow matchmaking between users.
              </p>
    </Container>
  );
};

export default FoolsmateScreen;