"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [buildList, setBuildList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const addToBuildList = (product) => {
        if (!buildList.find((item) => item.id === product.id)) {
            setBuildList((prev) => [...prev, product]);
        }
    };

    const removeFromBuildList = (id) => {
        setBuildList((prev) => prev.filter((item) => item.id !== id));
    };

    const addToWishList = (product) => {
        if (!wishList.find((item) => item.id === product.id)) {
            setWishList((prev) => [...prev, product]);
        }
    };

    const removeFromWishList = (id) => {
        setWishList((prev) => prev.filter((item) => item.id !== id));
    };

    const value = {
        buildList,
        setBuildList,
        wishList,
        setWishList,
        addToBuildList,
        removeFromBuildList,
        addToWishList,
        removeFromWishList,
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}
