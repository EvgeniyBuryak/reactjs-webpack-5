// JS, JSX
import React from "react";
import ReactDom from "react-dom";
import HomeScreen from "./screens/home-screen/home-screen.view";
import "./screens/home-screen/home-screen.view.css";

ReactDom.render(<HomeScreen />, document.getElementById('app'));

// SCSS
import '../public/assets/scss/main.scss';