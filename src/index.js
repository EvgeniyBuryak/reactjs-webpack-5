// JS, JSX
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

// SCSS
import '../public/assets/scss/main.scss';

ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
     document.getElementById('root')
    );