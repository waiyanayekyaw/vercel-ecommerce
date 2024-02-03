import React from "react";
import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import Offer from "../components/Offer";
import Popular from "../components/Popular";
import { Category } from "../components/Category";

export const Home = () => {
    return (
        <>
            <Hero />
            <NewCollections />
            <Offer />
            <Popular />
            <Category />
        </>
    );
};
