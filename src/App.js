import logo from "./logo.svg";
//import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Screens
import AboutScreen from "./Screens/About.js";
import WorkScreen from "./Screens/Work.js";
import SafeSpaceScreen from "./Screens/SafeSpace.js";
import FoolsmateScreen from "./Screens/Foolsmate.js";
import HomeScreen from "./Screens/Home.js";

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
                <Nav.Link style={{ fontSize: 25 }} href="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/work">
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-3">
                <Nav.Link style={{ fontSize: 25 }} href="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/work/SafeSpace">
            <SafeSpaceScreen />
          </Route>
          <Route path="/work/Foolsmate">
            <FoolsmateScreen />
          </Route>
          <Route path="/about">
          
          </Route>
          <Route path="/work">
            <WorkScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
