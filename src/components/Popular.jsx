import React from "react";
import "./styles/Popular.css";
import data_product from "../assets/data";
import { Link } from "react-router-dom";

export default function Popular() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item) => {
                    return (
                        <div className="women-item" key={item.id}>
                            <Link to={`/product/${item.id}`} onClick={scrollToTop}>
                                <img src={item.image} alt="" />
                            </Link>
                            <p>{item.name}</p>
                            <div className="item-prices">
                                <div className="item-new-price">${item.new_price}</div>
                                <div className="item-old-price">${item.old_price}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
