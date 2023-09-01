/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

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
              <Spinner animation="border" variant="primary" />
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
