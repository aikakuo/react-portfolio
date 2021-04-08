import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from "./components/About"
import Portfolio from "./pages/portfolio"
import "../src/App.css"
import styled from "styled-components"

function App() {
  return (
    <Router>
    
    <Switch>
      <About />
      </Switch>
      <Switch>
      <Portfolio /> 
    </Switch> 
  </Router>
  );
}

export default App;
