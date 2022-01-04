import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/sibers.com.api";
import ResultsList from "./views/result-list/results-list.view";
import "./home-screen.view.scss";

const HomeScreen = () => {
    const [results, setResults] = useState([]);

    const getResults = async () => {

        try {
            const result = await getUsers();

            setResults(result);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        getResults();
    }, []);

    return ( 
        <>
        <div className="content-wrapper">         
            <ResultsList results={results} />
        </div>
        </>
    )
}

export { HomeScreen };