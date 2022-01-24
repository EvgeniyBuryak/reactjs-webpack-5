import React, { useCallback } from "react";
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

        return myValidate();        
    },[]);

    const handleUser = useCallback((person)=>{
        setUser(person);
        localStorage.setItem(from.username, JSON.stringify(user));
    }, []);

    return (
        <div className="result-show-screen">
            <ul className="result-show-screen__list">
                <li className="result-show-screen_item">Name</li>                
                <li className="result-show-screen_item">Email</li>
                <li className="result-show-screen_item">Company</li>
                <li className="result-show-screen_item">Country</li>
                <li className="result-show-screen_item">State</li>
                <li className="result-show-screen_item">City</li>
                <li className="result-show-screen_item">Address</li>
            </ul>            
            <form
                  className="result-show-screen__list result-show-screen__list_second"
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
                <input className="result-show-screen_btn result-show-screen_btn__gradient" type="submit" value="Save" />
            </form>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export { ResultShowScreen };