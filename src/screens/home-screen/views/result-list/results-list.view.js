import React, { useCallback } from "react";
import FlatList from 'flatlist-react';
import ResultDetail from "../result-detail/result-detail.view";
import "./results-list.view.css";
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
        <>
            <h1> List Contacs </h1>
            <h2> {results.length} </h2>
            {/* <StyledList> */}
            <ul>
                <li>Имя</li>
                <li>Телефон</li>
                <li>Организация</li>
                <li>Группа</li>
            </ul>
            {/* </StyledList> */}
            <FlatList
                list={results}
                renderItem={renderPerson}
                // keyExtractor={keyExtractor}
            />            
        </>
    );
};

export default ResultList;