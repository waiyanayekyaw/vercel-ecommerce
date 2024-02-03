import React, { useContext } from "react";
import "./styles/ProductDetail.css";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

export default function ProductDetail() {
    const { all_product, addToCart } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((item) => item.id == productId);

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <div className="product-detail-img-lists">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-detail-main-img">
                    <img src={product.image} alt="" />
                </div>
            </div>

            <div className="product-detail-right">
                <h1>{product.name}</h1>
                <div className="product-detail-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                </div>

                <div className="product-detail-prices">
                    <div className="product-detail-old-price">${product.old_price}</div>
                    <div className="product-detail-new-price">${product.new_price}</div>
                </div>

                <div className="product-detail-description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium minima
                        eveniet rem. Reprehenderit accusantium, asperiores illo dolorem, animi,
                        tenetur repudiandae nobis tempora magnam cum commodi veritatis eveniet
                        veniam temporibus ducimus necessitatibus distinctio ipsum in eius eaque nam
                        laudantium hic dolor?
                    </p>
                </div>

                <div className="product-detail-size">
                    <h1>Select Size</h1>
                    <div className="product-detail-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
        </div>
    );
}
