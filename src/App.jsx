/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { Welcome, Home, About } from "./pages/";
import { Header, Footer } from "./components/";

export default withAuth0(
  class App extends Component {
    render() {
      const { isAuthenticated, isLoading } = this.props.auth0;

      return (
        <Router>
          <Header />
          <main>
            {isLoading ? (
              <Container fluid className="w-100">
                <Spinner
                  animation="border"
                  variant="primary"
                  className="mx-auto mt-5"
                />
              </Container>
            ) : (
              <Routes>
                {isAuthenticated ? (
                  <Route exact path="/" element={<Home />} />
                ) : (
                  <Route exact path="/" element={<Welcome />} />
                )}
                <Route exact path="/about" element={<About />} />
              </Routes>
            )}
          </main>
          <Footer />
        </Router>
      );
    }
  }
);
