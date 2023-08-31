/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

import { Welcome, Home, About } from "./pages/";
import { Header, Footer } from "./components/";

export default withAuth0(
  class App extends Component {
    render() {
      const { isAuthenticated } = this.props.auth0;
      return (
        <Router>
          <Header />
          <main className="p-3">
            <Routes>
              <Route
                exact
                path="/"
                element={isAuthenticated ? <Home /> : <Welcome />}
              />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      );
    }
  }
);
