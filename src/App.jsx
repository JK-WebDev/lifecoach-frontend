import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components/";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="p-3">
          <Routes>
            <Route />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  }
}
