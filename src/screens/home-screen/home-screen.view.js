import React, { useState, useEffect, useCallback } from "react";
import { getUsers } from "../../api/sibers.com.api";
import Form from "./views/form/form.view";
import ResultList from "./views/result-list/result-list.view";
import FlatList from 'flatlist-react';

const App = () => {
    const [results, setResults] = useState([]);

    const getResults = async () => {

        try {
            const result = await getUsers();

            setResults(result);
            // console.log(result)
        } catch (err) {
            alert("Ошибка в App.js");
        }
    }

    const renderItem = useCallback((user, id) => {
        // console.log(user);
        return (
            <li key={id}>
                <b>{user.name}</b>
            </li>
        );
    }, []);

    useEffect(() => {
        getResults();
    }, []);

    return (    
        <div>
            <h1>Welcome to React App</h1>
            <h3>Date : {new Date().toDateString()}</h3>            
            <Form />            
            <FlatList
                list={results}
                renderItem={renderItem}
            />
            {/* <ResultList results={results} /> */}
        </div>
    )
}

export default App