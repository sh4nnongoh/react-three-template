import React from "react";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import {
  Container
} from "react-bulma-components";
import Home from "./views/Home";
import AxiosContextWrapper from "./contexts/AxiosContext";
const App = () => (
  <AxiosContextWrapper>
    <Container
      display="flex"
      flexDirection="column"
      textAlign="center"
      backgroundColor="primary"
      style={{ minWidth: "100vw", minHeight: "100vh" }}
    >
      <Router>
        <Container className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </Container>
  </AxiosContextWrapper>
);
export default App;
