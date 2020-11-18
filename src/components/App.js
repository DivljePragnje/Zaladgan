import React from "react";
import Home from "./home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio";
import Contact from "./Contact/Contact";
import Sidebar from "./Sidebar/Sidebar";
import "./app.styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Sidebar />
        <div className="section">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
