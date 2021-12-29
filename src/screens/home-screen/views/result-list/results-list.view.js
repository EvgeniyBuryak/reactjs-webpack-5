import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import FlatList from 'flatlist-react';
import ResultDetail from "../result-detail/result-detail.view";
import "./results-list.view.scss";

const ResultList = ({ results }) => {
    
    const renderPerson = useCallback( (person, idx) => {
        return (
            // <>
            <Link to='/about' 
                  className="b123"
                  // pass props throught state
                  state={{ from: person }}
                  // idx - unique key flatlist-react library
                  key={idx}>
            {/* // <a key={idx}> */}
                {/* // <input onPress={() => navigation.navigate('ResultsShow', { id: person.id })}> */}
                {/* // properties key -  avoid error in flatlist-react library */}
                <ResultDetail result={person}/>
                {/* <Link to="/about" >About</Link> */}
                {/* </input>   */}
                {/* </> */}
            </Link>
        )}, []);

    const mouseOverHandler = (e) => {
        e.addEventListener("click", () => { alert("123") }, false);
    };  

    return (
        <div className="result-list">
            {/* <h2> List Contacs </h2> */}
            <h6> {results.length} </h6>
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
                renderWhenEmpty={() => <div>List Empty!</div>}
                limit={5}
                onMouseOver={mouseOverHandler}
            />            
        </div>
    );
};

export default ResultList;