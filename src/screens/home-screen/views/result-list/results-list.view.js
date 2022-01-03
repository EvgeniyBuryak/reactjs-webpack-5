import React, { useReducer, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import FlatList from 'flatlist-react';
import ResultDetail from "../result-detail/result-detail.view";
import "./results-list.view.scss";

const ResultList = ({ results }) => {
    // const [limit, setLimit] = useState({
    //     from: 0, 
    //     to: 5, 
    //     toString() {
    //         return `from: ${this.from} to: ${this.to}`;
    //     } 
    // });
    const initialState = {
        from: 0, 
        to: 5, 
        toString() {
            return `from: ${this.from} to: ${this.to}`;
        } 
    };
    

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer (state, action) {
        switch (action.type) {
            case 'increment':
                return {from: state.from + 5, to: state.to + 5};
            case 'decrement':
                return {from: state.from - 5, to: state.to - 5};
            default:
                throw new Error();
        }
    }

    // (person, idx)
    const renderPerson = useCallback( (person) => {
    // const renderPerson = (person) => {
        const ID = person.id;

        if (!(ID >= state.from && ID < state.to)) return;

        return (
            <Link to='/about' 
                  className=""
                  // pass props throught state
                  state={{ from: person }}
                  // idx - unique key flatlist-react library
                  // key={idx}>
                  // properties key -  avoid error in flatlist-react library
                  key={ID}>
                  {/* <input onPress={() => navigation.navigate('ResultsShow', { id: person.id })}> */}
                <ResultDetail result={person}/>
            </Link>
        )}, [state]);

    // const keyExtractor = (e) => {
    // // useCallback( (e) => {
    //     e.preventDefault();
    //     const updateValue= {}
    //     updateValue["from"] = 3
    //     // const obj = {from: 5, to: 10};
    //     setLimit(prevState => {
    //         return {...prevState, ...updateValue};
    //     });
    //     alert(limit.toString());
    // };
    // , []);

    return (
        <div className="result-list">
            <h6> {state.from} </h6>
            <div className="result-list__border-line">
                <ul className="result-list__list">
                    <li className="result-list__item">Name</li>
                    <li className="result-list__item">Phone</li>
                    <li className="result-list__item">Company</li>
                    <li className="result-list__item">Country</li>
                </ul>
            </div>
            {/* <FlatList
                list={results}
                renderItem={renderPerson}
                renderWhenEmpty={() => <div>List Empty!</div>}
                limit={limit}
            /> */}
            {results.map(renderPerson)}
            <button onClick={()=> dispatch({type: 'increment'})}>Вперед</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Назад</button>
            {/* <form onSubmit={keyExtractor}>
                <input type="submit" value="Назад"/>
                <input type="submit" value="Вперед"/>
            </form> */}
        </div>
    );
};

export default ResultList;