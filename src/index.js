// JS, JSX
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/home-screen/home-screen.view";
import { App } from "./App";

// SCSS
import '../public/assets/scss/main.scss';
import "./screens/home-screen/home-screen.view.scss";

ReactDom.render(
    // <App />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,document.getElementById('root')
    );