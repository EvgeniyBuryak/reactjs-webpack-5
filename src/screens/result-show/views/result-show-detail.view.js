import React, { useCallback } from "react";
import "./result-show-detail.view.scss";

const ResultShowDetail = ({ user, handleUser, name, type, value, error }) => {    

    const TEMPLATE_MAP_USER = new Map([
        ["name"     ,user['name']            ],
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
        
        handleUser(obj_user);        
    }, []);

    return (
        <div className="result-show-detail">
        <input  
            className="result-show-detail__item result-show-detail__btn"
            data-show-error-message={error}
            data-call-reg-type={name}
            type={type}
            placeholder={name}             
            defaultValue={TEMPLATE_MAP_USER.get(value)}            
            onChange={onChange}
        />
        </div>
    );   
}

export default ResultShowDetail;