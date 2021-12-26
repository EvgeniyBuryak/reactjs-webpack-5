import React from 'react';
import "./result-detail.view.css";

const ResultDetail = ( {result} ) => {
    
        return (
            <li key={result.id}>
                <b>{result.name}</b>
                {/* <p>{result.phone}</p> */}
            </li>
        );
    
};

export default ResultDetail;