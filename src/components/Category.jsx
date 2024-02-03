import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import men from "../assets/banner_men.png";
import women from "../assets/banner_women.png";
import kids from "../assets/banner_kids.png";

export const Category = () => {
    const [menu, setMenu] = useState("shop");
    let navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-[80%] mx-auto mt-10">
            <div>
                <img
                    onClick={() => {
                        navigate("/men");
                        setMenu("men");
                        scrollToTop();
                    }}
                    src={men}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
                {menu == "men" ? <hr /> : <></>}
            </div>
            <div className="my-5">
                <img
                    onClick={() => {
                        navigate("/women");
                        setMenu("women");
                        scrollToTop();
                    }}
                    src={women}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
                {menu == "women" ? <hr /> : <></>}
            </div>
            <div>
                <img
                    onClick={() => {
                        navigate("/kids");
                        setMenu("kid");
                        scrollToTop();
                    }}
                    src={kids}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
                {menu == "kid" ? <hr /> : <></>}
            </div>
        </div>
    );
};
