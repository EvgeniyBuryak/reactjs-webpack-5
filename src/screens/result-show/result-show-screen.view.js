import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";
import { myValidate } from "./form-validation";
import ResultShowDetail from "./views/result-show-detail.view";
import { useStateWithLocalStorage } from "./useStateWithLocalStorage";

const ResultShowScreen = () => {
    // const [name, setName] = useState(localStorage.getItem("name"));
    const location = useLocation();
    const { from } = location.state;
    // const [user, setUser] = useState(
    //     localStorage.getItem(from.username) || ''
    // );
    const [user, setUser] = useStateWithLocalStorage(from.username);

    const handleFormSubmit = useCallback((e)=> {
        e.preventDefault();

        // localStorage[from.username] = JSON.stringify(from);
        // setUser(JSON.parse(localStorage[from.username]));
        return myValidate();        
    },[]);

    const onChange = event => setUser(event.target.value);

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
            <form key={from.id} 
                  className="result-show-screen__list result-show-screen__list_second"
                  name="form" 
                  method="get" 
                  onSubmit={handleFormSubmit}
                  noValidate
                >
                <ResultShowDetail name={"name"} type={"text"} value={(user || '')} onChange={onChange} error={"letters"} />
                {/* <ResultShowDetail name={"name"}     type={"text"}  value={user['name']}                    error={"letters"} />                                                 */}
                {/* <ResultShowDetail name={"username"} type={"text"}  value={user.username}           error={"letters-numbers"} />
                <ResultShowDetail name={"email"}    type={"email"} value={user.email}              error={"email"} />
                <ResultShowDetail name={"company"}  type={"text"}  value={user.company["name"]}    error={"letters"} />
                <ResultShowDetail name={"country"}  type={"text"}  value={user.address["country"]} error={"letters"} />
                <ResultShowDetail name={"state"}    type={"text"}  value={user.address["state"]}   error={"letters"} />
                <ResultShowDetail name={"city"}     type={"text"}  value={user.address["city"]}    error={"letters"} />
                <ResultShowDetail name={"address"}  type={"text"}  value={user.address["streetA"]} error={"letters"} /> */}
                <input className="result-show-screen_btn result-show-screen_btn__gradient" type="submit" value="Save" />
            </form>
            {/* <nav>
                <Link to="/">Home</Link>
            </nav> */}
        </div>
    );
}

export { ResultShowScreen };