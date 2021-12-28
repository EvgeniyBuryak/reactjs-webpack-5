import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/sibers.com.api";
import Form from "./views/form/form.view";
import ResultsList from "./views/result-list/results-list.view";

const HomeScreen = () => {
    const [results, setResults] = useState([]);

    const getResults = async () => {

        try {
            const result = await getUsers();

            setResults(result);
        } catch (err) {
            alert("Ошибка в App.js");
        }
    };

    useEffect(() => {
        getResults();
    }, []);

    return ( 
        <>
        <div className="content-wrapper">
            <h1>Сontacts book</h1>
            <h3>Date : {new Date().toDateString()}</h3>            
            <Form />
            <ResultsList results={results} />
        </div>
        </>
    )
}

export { HomeScreen };