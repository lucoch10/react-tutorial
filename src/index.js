import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./components/counter";
import {Col, Row, Container} from "react-bootstrap";
import NavMenu from "./components/navMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";

let welcomeMsj = {
    message: "Welcome to React Tutorial",
    userName: "Luis"
}

ReactDOM.render(
  <React.StrictMode>
      <NavMenu welcomeMsj={welcomeMsj}/>
      <Container>
          <BrowserRouter>
              <Routes>
                  <Route path="counter" element={<Counter/>}/>
                  <Route path="pokedex" element={<App/>}/>
              </Routes>
          </BrowserRouter>
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
