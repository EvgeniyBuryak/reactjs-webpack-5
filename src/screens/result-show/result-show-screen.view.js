import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;
    console.log(from.avatar);
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
                <li className="result-show-screen_item">Phone</li>
                <li className="result-show-screen_item">Country</li>
                <li className="result-show-screen_item">State</li>
                <li className="result-show-screen_item">City</li>
                <li className="result-show-screen_item">Address</li>
            </ul>
            </div>
            <ul key={from.id} className="result-show-screen__list result-show-screen__list_second">
                {/* <li className="result-show-screen_item"><img className="avatar" source={{ uri: from.avatar }} alt="avatar" /></li> */}
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="name" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="username" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="email" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="company" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="phone" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="country" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="state" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="city" />
                <input className="result-show-screen_item result-show-screen_btn" type="text" placeholder="address" />                
                {/* <li className="result-show-screen_item"><b>{from.name}</b></li>
                <li className="result-show-screen_item"><b>{from.username}</b></li>  
                <li className="result-show-screen_item"><b>{from.email}</b></li>                
                <li className="result-show-screen_item"><b>{from.company["name"]}</b></li>
                <li className="result-show-screen_item"><b>{from.phone}</b></li>
                <li className="result-show-screen_item"><b>{from.address["country"]}</b></li>
                <li className="result-show-screen_item"><b>{from.address["state"]}</b></li>
                <li className="result-show-screen_item"><b>{from.address["city"]}</b></li>
                <li className="result-show-screen_item"><b>{from.address["streetA"]}</b></li> */}
            </ul>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export { ResultShowScreen };