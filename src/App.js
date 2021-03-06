import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as HashRouter,
  Route,
  Link,
} from "react-router-dom";

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
      <HashRouter basename="/portfolio">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand style={{ fontSize: 30 }}>Alex Springer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mh-3">
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }}>
                  <Link style={{ color: "rgba(255,255,255,.5)" }} to="/">
                    Home
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/about">
                  <Link style={{ color: "rgba(255,255,255,.5)" }} to="/about">
                    About
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }}>
                  <Link style={{ color: "rgba(255,255,255,.5)" }} to="/work">
                    Work
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/contact">
                  <Link style={{ color: "rgba(255,255,255,.5)" }} to="/contact">
                    Contact
                  </Link>
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
        <Route path="/work/SafeSpace" component={SafeSpaceScreen} />
        <Route path="/work/Foolsmate" component={FoolsmateScreen} />
        <Route path="/work/Bitmap" component={BitmapScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route exact path="/work" component={WorkScreen} />
        <Route exact path="/" component={HomeScreen} />
      </HashRouter>
    </body>
  );
}

export default App;
