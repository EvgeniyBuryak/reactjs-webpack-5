import React, { useEffect } from 'react';
import "./result-detail.view.scss";

const ResultDetail = ( {result} ) => {
    const setResults = () => {
        let name = 'name';
        let phone = 'phone';

        localStorage.setItem(name, result[name]);
        localStorage.setItem(phone, result[phone]);
        localStorage.setItem("company", result.company["name"]);
        localStorage.setItem("country", result.address["country"]);
    }
    
    useEffect(() => {
        setResults();
    }, []);
    
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