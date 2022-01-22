import React, { useCallback } from "react";
import { useReducerWithLocalStorage } from "./useReducerWithLocalStorage";
import "./result-show-detail.view.scss";

const ResultShowDetail = ({ user, handleUser, name, type, value, error }) => {
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

    // https://learn.javascript.ru/property-descriptors
    // Флаги и дескрипторы свойств
    const onChange = useCallback(event => {
        const obj_user = user;
        // console.log(user);
        switch (value) {
            case "name": 
                obj_user['name'] = event.target.value;
                break;
            case "username":
                obj_user['username'] = event.target.value;
                break;
            case "email":
                obj_user['email'] = event.target.value;
                break;
            case "company":
                obj_user.company['name'] = event.target.value;
                break;
            case "country":
                obj_user['address']['country'] = event.target.value;
                break;
            case "state":
                obj_user['address']['state'] = event.target.value;
                break;
            case "city":
                obj_user.address['city'] = event.target.value;
                break;
            case "streetA":
                obj_user.address['streetA'] = event.target.value;
                break;
            default:
                break;
        }
        // let descriptor = Object.getOwnPropertyDescriptor(obj_user, value);
        handleUser(obj_user);
        // console.log(user);
        // localStorage.setItem(from.username, JSON.stringify(obj_user));
    }, []);

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