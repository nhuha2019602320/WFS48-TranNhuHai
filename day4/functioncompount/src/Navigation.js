import React from "react";
import Main from './Main.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Route exact path="/" >
            <Main/>
        </Route>
        <Route exact path="/about" >
            <About/>
        </Route>
    </Router>
  );
}
const About =()=><div>day la trang gioi thieu</div>