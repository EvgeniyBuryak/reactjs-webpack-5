import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/home-screen/home-screen.view";
import { ResultShowScreen } from "./screens/result-show/result-show-screen.view";

const App = () => {
    return (
        <div className="wrapper">
            <div className="App">
                <h1>Welcome to React Router!</h1>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<ResultShowScreen />} />
                </Routes>
            </div>
        </div>
    );
}

export { App };