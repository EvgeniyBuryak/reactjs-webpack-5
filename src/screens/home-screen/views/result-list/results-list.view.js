import React, { useCallback } from "react";
import FlatList from 'flatlist-react';
import ResultDetail from "../result-detail/result-detail.view";
import "./results-list.view.scss";
// import styled, { createGlobalStyle } from "styled-components";
// // styled - стилизация компонента
// // createGlobalStyle - глобальные стили
// const StyledList = styled.ul`    
//     display: flex;
//     flex-direction: row;
// `;

const ResultList = ({ results }) => {
    
    // const keyExtractor = useCallback( item => item.id.toString(), []);
    const renderPerson = useCallback( (person) => {
        return (            
            // <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            // properties key -  avoid error in flatlist-react library
            <ResultDetail result={person} key={person.id}/>
            // </TouchableOpacity>
        )}, []);

    return (
        <div className="result-list">
            <h1> List Contacs </h1>
            <h2> {results.length} </h2>
            <div className="result-list__border-line">
                <ul className="result-list__list">
                    <li className="result-list__item">Name</li>
                    <li className="result-list__item">Phone</li>
                    <li className="result-list__item">Company</li>
                    <li className="result-list__item">Country</li>
                </ul>
            </div>
            <FlatList
                list={results}
                renderItem={renderPerson}
                // keyExtractor={keyExtractor}
            />            
        </div>
    );
};

export default ResultList;