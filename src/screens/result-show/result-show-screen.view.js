import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./result-show-screen.view.scss";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;
    console.log(from);
    return (
        <div className="result-show-screen">
            <div className="result-show-screen_width">
            <ul className="result-show-screen__list">
                <li className="result-detail__item1">Аватар</li>
                <li className="result-detail__item1">Вип Статус</li>
                <li className="result-detail__item1">Имя</li>
                <li className="result-detail__item1">Никнейм</li>
                <li className="result-detail__item1">Почта</li>
                <li className="result-detail__item1">Адрес</li>
                <li className="result-detail__item1">Телефон</li>
                <li className="result-detail__item1">Сайт</li>
                <li className="result-detail__item1">Компания</li>
                <li className="result-detail__item1">Страна</li>
            </ul>
            </div>
            <ul key={from.id} className="result-show-screen__list result-show-screen__list_second">
                <li className="result-detail__item2">Аватар</li>
                <li className="result-detail__item2">Вип Статус</li>
                <li className="result-detail__item2">Имя<b>{from.name}</b></li>
                <li className="result-detail__item2">Никнейм</li>
                <li className="result-detail__item2">Почта</li>
                <li className="result-detail__item2">Адрес</li>
                <li className="result-detail__item2">Телефон<b>{from.phone}</b></li>
                <li className="result-detail__item2">Сайт</li>
                <li className="result-detail__item2">Компания<b>{from.company["name"]}</b></li>
                <li className="result-detail__item2">Страна<b>{from.address["country"]}</b></li>
            </ul>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export { ResultShowScreen };