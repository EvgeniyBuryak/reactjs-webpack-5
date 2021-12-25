import React from "react";
import "./result-list.view.css";

const ResultList = ({ results }) => {
    return (
        <div>
            <h1> Results </h1>
            <p>${results[0].name}</p>
        </div>
    );
};

export default ResultList;