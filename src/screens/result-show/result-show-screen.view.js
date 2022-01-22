import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";
import { myValidate } from "./form-validation";
import ResultShowDetail from "./views/result-show-detail.view";
import { useStateWithLocalStorage } from "./views/useStateWithLocalStorage";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;    
    const [user, setUser] = useStateWithLocalStorage(from);

    const handleFormSubmit = useCallback((e)=> {
        e.preventDefault();

        // localStorage[from.username] = JSON.stringify(from);
        // setUser(JSON.parse(localStorage[from.username]));
        return myValidate();        
    },[]);

    const handleUser = useCallback((person)=>{
        setUser(person);
        localStorage.setItem(from.username, JSON.stringify(user));
    }, []);

    // useEffect(()=>{
    //     console.log(user);
    //     // if (localStorage.getItem(localStorageKey.username) == null)
    // });

    return (
        <div className="result-show-screen">
            {/* <div className="result-show-screen_width"> */}
            <ul className="result-show-screen__list">
                {/* <li className="result-show-screen_item">Аватар</li> */}
                {/* <li className="result-show-screen_item">Vip</li> */}
                <li className="result-show-screen_item">Name</li>
                <li className="result-show-screen_item">Username</li>
                <li className="result-show-screen_item">Email</li>
                <li className="result-show-screen_item">Company</li>
                {/* <li className="result-show-screen_item">Phone</li> */}
                <li className="result-show-screen_item">Country</li>
                <li className="result-show-screen_item">State</li>
                <li className="result-show-screen_item">City</li>
                <li className="result-show-screen_item">Address</li>
                {/* <li></li> */}
            </ul>
            {/* </div> */}
            <form // key={from.id} 
                  className="result-show-screen__list result-show-screen__list_second"
                  name="form" 
                  method="get" 
                  onSubmit={handleFormSubmit}
                  noValidate
                >
                {/* <ResultShowDetail name={"name"} type={"text"} value={(user || '')} onChange={onChange} error={"letters"} /> */}
                <ResultShowDetail user={user} handleUser={handleUser} name={"name"}     type={"text"}  value={'name'}     error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"username"} type={"text"}  value={'username'} error={"letters-numbers"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"email"}    type={"email"} value={'email'}    error={"email"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"company"}  type={"text"}  value={'company'}  error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"country"}  type={"text"}  value={'country'}  error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"state"}    type={"text"}  value={'state'}    error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"city"}     type={"text"}  value={'city'}     error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"address"}  type={"text"}  value={'streetA'}  error={"letters"} />
                <input className="result-show-screen_btn result-show-screen_btn__gradient" type="submit" value="Save" />
            </form>
            {/* <nav>
                <Link to="/">Home</Link>
            </nav> */}
        </div>
    );
}

export { ResultShowScreen };