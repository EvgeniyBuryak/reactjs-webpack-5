import React from 'react';
import "./result-detail.view.scss";

const ResultDetail = ( {result} ) => {
    
    return (
        <div className="result-detail__border-line">
            <ul key={result.id} className="result-detail__list">
                <li className="result-detail__item"><b>{result.name}</b></li>
                <li className="result-detail__item"><b>{result.phone}</b></li>
                <li className="result-detail__item"><b>{result.company["name"]}</b></li>
                <li className="result-detail__item"><b>{result.address["country"]}</b></li>
            </ul>
        </div>
    );
    
};

export default ResultDetail;