import React from "react";
import "./styles/TotalAmount.css";
import { useNavigate } from "react-router-dom";

export default function TotalAmount({ totalAmount }) {
    const navigate = useNavigate();

    return (
        <div className="total-amount">
            <h2>Cart Totals</h2>
            <div className="subtotal">
                <p>Subtotal</p>
                <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="shipping-fee">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="total">
                <p>Total</p>
                <p>${totalAmount}</p>
            </div>

            <button className="check-btn">CHECKOUT</button>
        </div>
    );
}
