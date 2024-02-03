import React, { useContext, useEffect, useState } from "react";
import "./styles/Cart.css";
import { ShopContext } from "../contexts/ShopContext";
import remove from "../assets/cart_cross_icon.png";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import empty_cart from "../assets/empty_cart.png";
import TotalAmount from "../components/TotalAmount";

export default function Cart() {
    const { state, removeFromCart } = useContext(ShopContext);
    const [updateQty, setUpdateQty] = useState(state.qty);
    const [totalAmount, setTotalAmount] = useState(0);

    const addQty = (item) => {
        setUpdateQty(item.qty++);
    };

    const subtractQty = (item) => {
        if (item.qty > 1) {
            setUpdateQty(item.qty--);
        }
    };

    useEffect(() => {
        const calculateTotal = () => {
            let total = 0;
            state.cartItems.map((item) => {
                total += item.new_price * item.qty;
            });
            setTotalAmount(total);
        };
        calculateTotal();
    }, [state.cartItems, updateQty]);

    return (
        <div className="cart">
            {state.cartItems.length == 0 ? (
                <div className="empty-cart">
                    <img src={empty_cart} alt="" />
                    <h3>Your Cart is Empty</h3>
                </div>
            ) : (
                <>
                    <div className="cart-format">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {state.cartItems.map((item) => (
                        <ul key={item.id}>
                            <div className="cart-items">
                                <img src={item.image} className="cart-items-img" alt="" />
                                <p>{item.name}</p>
                                <p className="cart-items-price">${item.new_price}</p>

                                <div className="cart-items-quantity">
                                    <img onClick={() => subtractQty(item)} src={minus} alt="" />
                                    <div>{item.qty}</div>
                                    <img onClick={() => addQty(item)} src={plus} alt="" />
                                </div>

                                <p className="cart-items-total">${item.new_price * item.qty}</p>
                                <img
                                    src={remove}
                                    onClick={() => removeFromCart(item)}
                                    className="cart-items-remove-icon"
                                    alt=""
                                />
                            </div>
                            <hr />
                        </ul>
                    ))}
                    <TotalAmount totalAmount={totalAmount} />
                </>
            )}
        </div>
    );
}
