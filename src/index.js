// JSX
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// JS
// import "../public/assets/js/index";
// SCSS
import '../public/assets/scss/main.scss';
import { App } from "./App";

ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
     document.getElementById('root')
    );