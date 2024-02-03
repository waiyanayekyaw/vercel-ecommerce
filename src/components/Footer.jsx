import React from "react";
import privacy from "../assets/privacy.svg";
import return_policy from "../assets/return_policy.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import viber from "../assets/viber_icon.png";
import telegram from "../assets/telegram_icon.png";

export const Footer = () => {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 md:mx-[100px] lg:grid-cols-4 lg:mx-[200px] mx-10 mt-16">
                <div>
                    <h4 className="text-xl mb-3">Customer Service</h4>
                    <div className="flex mb-2">
                        <img src={privacy} alt="" />
                        <p className="ml-2">Terms and Privacy Policy</p>
                    </div>
                    <div className="flex">
                        <img src={return_policy} alt="" />
                        <p className="ml-2">Return Policy</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="text-xl mb-3">Language</h4>
                    <div>
                        <input type="radio" />
                        <p className="inline-block ml-2">Myanmar (Unicode)</p>
                    </div>
                    <div>
                        <input type="radio" />
                        <p className="inline-block ml-2">Myanmar (Zawgyi)</p>
                    </div>
                    <div>
                        <input type="radio" checked />
                        <p className="inline-block ml-2">English</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="text-xl mb-3">Contact Us</h4>
                    <div className="flex mb-2">
                        <img src={location} alt="" />
                        <p className="ml-2">
                            Lay Daunt Kan Main Road, Cashmere shop, Near Zawana, Thinganyun Tsp,
                            Yangon
                        </p>
                    </div>
                    <div className="flex">
                        <img src={phone} alt="" />
                        <p className="ml-2">09458489458</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h4 className="text-xl mb-3">Follow Us On</h4>
                    <div className="flex gap-2">
                        <img src={facebook} alt="" width={38} height={38} />
                        <img src={instagram} alt="" width={38} height={38} />
                        <img src={viber} alt="" width={38} height={38} />
                        <img src={telegram} alt="" width={38} height={38} />
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 mb-5">
                <hr />
                <p className="mt-5">&copy; Copyright 2024 by D Co.,Ltd. All Right Reserved</p>
            </div>
        </>
    );
};
