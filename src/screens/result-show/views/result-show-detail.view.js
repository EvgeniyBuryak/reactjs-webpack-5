import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";
import { useReducerWithLocalStorage } from "./useReducerWithLocalStorage";
import "./result-show-detail.view.scss";

const ResultShowDetail = ({ name, type, value, error }) => {
    
    const location = useLocation();
    const { from } = location.state;

    const [user, setUser] = useStateWithLocalStorage(from);
    // const [state, dispatch] = useReducerWithLocalStorage(from);

    const onChange = event => {
        from[value] = event.target.value;
        localStorage.setItem(from.username, JSON.stringify(from));
    };
    // const onChange = event => setUser(event.target.value);
    // const onChange = event => dispatch({type: value, value: event.target.value});

    // console.log(localStorage.getItem(from.username));

    // const TEMPLATE_MAP_USER = new Map([
    //     ["name"     ,user['name']],
    //     ["username" ,user['username']],
    //     ["email"    ,user['email']],
        // ["company"  ,user.company['name']],
        // ["country"  ,user['address["country"]], 
        // ["state"    ,user['address["state"]}   
        // ["city"     ,user['address["city"]}    
        // ["address"  ,user['address["streetA"]}
    // ]);

    return (
        <div className="result-show-detail">
        <input  
            className="result-show-detail_item result-show-detail_btn" 
            data-show-error-message={error}
            data-call-reg-type={name}
            type={type}
            placeholder={name} 
            // defaultValue={dispatch({ type: 'name'})}
            // defaultValue={state.name}
            // defaultValue={TEMPLATE_MAP_USER.get(value)}
            defaultValue={user[value]}
            onChange={onChange}
        />
        </div>
    );   
}

export default ResultShowDetail;