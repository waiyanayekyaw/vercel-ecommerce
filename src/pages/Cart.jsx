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
                <div className="overflow-x-auto">
                    <table className="w-full bg-gray-100 text-left text-sm text-gray-500">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-900">Products</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Title</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Price</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Quantity</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Total</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Remove</th>
                            </tr>
                        </thead>

                        {state.cartItems.map((item) => (
                            <>
                                <tbody className="border border-b-2">
                                    <tr key={item.id}>
                                        <td className="px-6 py-4">
                                            <img
                                                src={item.image}
                                                className="md:h-[70px] sm:h-[50px]"
                                                alt=""
                                            />
                                        </td>
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">${item.new_price}</td>
                                        <td className="px-5 py-4">
                                            <div className="flex justify-center items-center gap-3">
                                                <img
                                                    onClick={() => subtractQty(item)}
                                                    src={minus}
                                                    className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"
                                                    alt=""
                                                />
                                                <div className="text-lg">{item.qty}</div>
                                                <img
                                                    onClick={() => addQty(item)}
                                                    src={plus}
                                                    className="w-5 h-5 bg-red-500 rounded-full cursor-pointer"
                                                    alt=""
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">${item.new_price * item.qty}</td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={remove}
                                                onClick={() => removeFromCart(item)}
                                                className="cursor-pointer"
                                                alt=""
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        ))}
                    </table>
                    <TotalAmount totalAmount={totalAmount} />
                </div>
            )}
        </div>
    );
}
