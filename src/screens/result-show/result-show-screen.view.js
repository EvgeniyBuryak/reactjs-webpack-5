import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";
import { myValidate } from "./form-validation";
import ResultShowDetail from "./views/result-show-detail.view";
import { useStateWithLocalStorage } from "./hooks/useStateWithLocalStorage";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;    
    const [user, setUser] = useStateWithLocalStorage(from);

    const handleFormSubmit = useCallback((e)=> {
        e.preventDefault();

        return myValidate();        
    },[]);

    const handleUser = useCallback((person)=>{
        setUser(person);
        localStorage.setItem(from.username, JSON.stringify(user));
    }, []);

    return (
        <>
        <nav className="result-show-screen__nav">
            <Link className="result-show-screen__link" to="/">Back to Home</Link>
        </nav>
        <div className="result-show-screen">
            <ul className="result-show-screen__list">
                <li className="result-show-screen__item">Name</li>
                <li className="result-show-screen__item">Email</li>
                <li className="result-show-screen__item">Company</li>
                <li className="result-show-screen__item">Country</li>
                <li className="result-show-screen__item">State</li>
                <li className="result-show-screen__item">City</li>
                <li className="result-show-screen__item">Address</li>
            </ul>            
            <form
                  className="result-show-screen__list result-show-screen__list--second"
                  name="form" 
                  method="get" 
                  onSubmit={handleFormSubmit}
                  noValidate
                >
                <ResultShowDetail user={user} handleUser={handleUser} name={"name"}     type={"text"}  value={'name'}     error={"letters"} />                
                <ResultShowDetail user={user} handleUser={handleUser} name={"email"}    type={"email"} value={'email'}    error={"email"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"company"}  type={"text"}  value={'company'}  error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"country"}  type={"text"}  value={'country'}  error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"state"}    type={"text"}  value={'state'}    error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"city"}     type={"text"}  value={'city'}     error={"letters"} />
                <ResultShowDetail user={user} handleUser={handleUser} name={"address"}  type={"text"}  value={'streetA'}  error={"letters"} />
                <input className="result-show-screen__btn result-show-screen__btn--gradient" type="submit" value="Save" />
            </form>            
        </div>
        </>
    );
}

export { ResultShowScreen };