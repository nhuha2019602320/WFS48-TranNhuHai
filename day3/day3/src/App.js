import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Main from './Main.js';
import Signup from './Siginup.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
      <Router>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/signup">
              <Signup/>
          </Route>
          <Route exact path="/">
              <Main></Main>
          </Route>
      </Router>
  );
}

export default App;
