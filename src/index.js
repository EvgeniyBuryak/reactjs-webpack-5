// JS, JSX
import React from "react";
import ReactDom from "react-dom";
import HomeScreen from "./screens/home-screen/home-screen.view";

// SCSS
import '../public/assets/scss/main.scss';
import "./screens/home-screen/home-screen.view.scss";

ReactDom.render(<HomeScreen />, document.getElementById('app'));