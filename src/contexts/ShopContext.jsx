import React, { useReducer } from "react";
import { createContext } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const presentItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (presentItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, { ...action.payload, qty: 1 }] };
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
            };

        case "UPDATE_QTY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
                ),
            };

        default:
            return state;
    }
};

const ShopContextProvider = ({ children }) => {
    const initialState = { cartItems: [] };
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item });
    };

    const updateQty = (item, qty) => {
        dispatch({ type: "UPDATE_QTY", payload: { id: item.id, qty } });
    };

    const contextValue = { all_product, state, addToCart, removeFromCart, updateQty };

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
