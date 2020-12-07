import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Screens
import AboutScreen from "./Screens/About.js";
import WorkScreen from "./Screens/Work.js";
import SafeSpaceScreen from "./Screens/SafeSpace.js";
import FoolsmateScreen from "./Screens/Foolsmate.js";
import HomeScreen from "./Screens/Home.js";
import BitmapScreen from "./Screens/Bitmap.js";
import ContactScreen from "./Screens/Contact.js";

import Github from "./Assets/GitHub.png";

function App() {
  return (
    <body class="mx-0, p-0">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand style={{ fontSize: 30 }} href="/">
            Alex Springer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mh-3">
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/portfolio">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/portfolio/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/portfolio/work">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/portfolio/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Container fluid className="d-inline d-lg-flex justify-content-end">
              <a href="https://github.com/alexspringer?tab=repositories">
                <img
                  className="my-1"
                  style={{ width: 40, height: 40 }}
                  src={Github}
                  alt=""
                />
              </a>
            </Container>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/portfolio/work/SafeSpace">
            <SafeSpaceScreen />
          </Route>
          <Route path="/portfolio/work/Foolsmate">
            <FoolsmateScreen />
          </Route>
          <Route path="/portfolio/work/Bitmap">
            <BitmapScreen />
          </Route>
          <Route path="/portfolio/contact">
            <ContactScreen />
          </Route>
          <Route path="/portfolio/about">
            <AboutScreen />
          </Route>
          <Route path="/portfolio/work">
            <WorkScreen />
          </Route>
          <Route path="/portfolio">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
