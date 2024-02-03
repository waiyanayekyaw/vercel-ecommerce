import React from "react";
import "./styles/Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={scrollToTop} src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-new-price">${props.new_price}</div>
                <div className="item-old-price">${props.old_price}</div>
            </div>
        </div>
    );
}
