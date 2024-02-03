import React from "react";
import "./styles/Hero.css";
import arrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <p>New</p>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" color="#000" />
                </div>
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
}
