import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";
import { myValidate } from "./form-validation";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;
    
    console.log(from.avatar);

    const onValidater = useCallback((e)=> {
        e.preventDefault();
        // alert("it works!");
        const my = myValidate();
        // alert(my);
        return my;
    },[]);

    // const handleSubmit = {
    //     return myValidate()
    // };

    return (
        <div className="result-show-screen">
            <div className="result-show-screen_width">
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
            </ul>
            </div>
            <form key={from.id} 
                  className="result-show-screen__list result-show-screen__list_second"
                  name="form" 
                  method="get" 
                  onSubmit={onValidater}
                  noValidate
                >
                {/* <li className="result-show-screen_item"><img className="avatar" source={{ uri: from.avatar }} alt="avatar" /></li> */}
                <input className="result-show-screen_item result-show-screen_btn" 
                       type="text" 
                       placeholder="name" 
                       defaultValue={from.name}/>
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="username" 
                       defaultValue={from.username}/>
                <input className="result-show-screen_item result-show-screen_btn" type="email" placeholder="email"
                       defaultValue={from.email}/>
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="company"
                       defaultValue={from.company["name"]}/>
                {/* <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="phone" */}
                       {/* defaultValue={from.phone}/> */}
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="country"
                       defaultValue={from.address["country"]}/>
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="state"
                       defaultValue={from.address["state"]}/>
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="city"
                       defaultValue={from.address["city"]}/>
                <input className="result-show-screen_item result-show-screen_btn" 
                       type="text" 
                       placeholder="address" 
                       defaultValue={from.address["streetA"]}/>
                <input className="result-show-screen_btn" type="submit" value="Save" />                
            </form>
            {/* <nav>
                <Link to="/">Home</Link>
            </nav> */}
        </div>
    );
}

export { ResultShowScreen };