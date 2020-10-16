import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Projects from './Projects/Projects';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Nav from "./Nav/nav";
import About from "./About/About"
import Contact from "./Contact/Contact"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
