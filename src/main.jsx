import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopContextProvider from "./contexts/ShopContext.jsx";
import { Home } from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Cart from "./pages/Cart.jsx";
import men_banner from "./assets/banner_men.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/men",
                element: <ShopCategory banner={men_banner} category="men" />,
            },
            {
                path: "/women",
                element: <ShopCategory banner={women_banner} category="women" />,
            },
            {
                path: "/kids",
                element: <ShopCategory banner={kids_banner} category="kid" />,
            },
            {
                path: "/product/:productId",
                element: <ProductDetail />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <ShopContextProvider>
        <RouterProvider router={router} />
    </ShopContextProvider>
);
