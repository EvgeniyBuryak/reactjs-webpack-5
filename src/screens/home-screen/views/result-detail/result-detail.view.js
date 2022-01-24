import React, { useState } from 'react';
import "./result-detail.view.scss";

const ResultDetail = ( {result} ) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem(result.username)) || result
    );
    
    return (
        <div className="result-detail__border-line">
            <ul key={result.id} className="result-detail__list">
                <li className="result-detail__item"><b>{user.name}</b></li>
                <li className="result-detail__item"><b>{user.phone}</b></li>
                <li className="result-detail__item"><b>{user.company["name"]}</b></li>
                <li className="result-detail__item"><b>{user.address["country"]}</b></li>
            </ul>
        </div>
    );
    
};

export default ResultDetail;