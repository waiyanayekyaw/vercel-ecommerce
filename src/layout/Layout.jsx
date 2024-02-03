import React, { useContext } from "react";
import "./Layout.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import search_icon from "../assets/search_icon.svg";
import { Footer } from "../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

export const Layout = () => {
    const { state } = useContext(ShopContext);
    let navigate = useNavigate();

    return (
        <>
            {/* navbar */}
            <div className="flex items-center justify-around py-3">
                <div
                    onClick={() => {
                        navigate("/");
                    }}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img src={logo} alt="" />
                    <h1 className="text-2xl font-normal">Shopping</h1>
                </div>

                <div className="flex gap-3">
                    <img src={search_icon} className="w-8 cursor-pointer" alt="" />
                    <img
                        src={cart}
                        onClick={() => {
                            navigate("/cart");
                        }}
                        className="w-8 cursor-pointer"
                        alt=""
                    />
                    <div className="nav-cart-count">{state.cartItems.length}</div>
                </div>
            </div>

            <Outlet />
            <Footer />
        </>
    );
};
