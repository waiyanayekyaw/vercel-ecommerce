import React from "react";
import { useNavigate } from "react-router-dom";
import men from "../assets/banner_men.png";
import women from "../assets/banner_women.png";
import kids from "../assets/banner_kids.png";

export const Category = () => {
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
                        scrollToTop();
                    }}
                    src={men}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
            </div>
            <div className="my-5">
                <img
                    onClick={() => {
                        navigate("/women");
                        scrollToTop();
                    }}
                    src={women}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
            </div>
            <div>
                <img
                    onClick={() => {
                        navigate("/kids");
                        scrollToTop();
                    }}
                    src={kids}
                    className="rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-95"
                    alt=""
                />
            </div>
        </div>
    );
};
