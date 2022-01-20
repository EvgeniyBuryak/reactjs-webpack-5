import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";
import { useReducerWithLocalStorage } from "./useReducerWithLocalStorage";
import "./result-show-detail.view.scss";

const ResultShowDetail = ({ name, type, value, error }) => {
    
    const location = useLocation();
    const { from } = location.state;
    const [user, setUser] = useStateWithLocalStorage(from);
    // const [state, dispatch] = useReducerWithLocalStorage(from);

    const TEMPLATE_MAP_USER = new Map([
        ["name"     ,user['name']            ],
        ["username" ,user['username']        ],
        ["email"    ,user['email']           ],
        ["company"  ,user.company['name']    ],
        ["country"  ,user.address["country"] ],
        ["state"    ,user.address["state"]   ],
        ["city"     ,user.address["city"]    ],
        ["streetA"  ,user.address["streetA"] ],
    ]);

    const onChange = useCallback(event => {
        const obj_user = user;
        obj_user[value] = event.target.value;
        // setUser({name: event.target.value}, ...user);
        setUser(obj_user);
        
        // TEMPLATE_MAP_SET_USER.get(value) = event.target.value;
        // from[value] = event.target.value;
        localStorage.setItem(from.username, JSON.stringify(user));
    }, [value, user]);

    // const onChange = event => setUser(event.target.value);
    // const onChange = event => dispatch({type: value, value: event.target.value});

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
            defaultValue={TEMPLATE_MAP_USER.get(value)}
            // defaultValue={user[value]}
            onChange={onChange}
        />
        </div>
    );   
}

export default ResultShowDetail;