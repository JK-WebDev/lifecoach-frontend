import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Welcome, Footer } from "./components/";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="p-3">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  }
}
