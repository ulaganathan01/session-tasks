import { productContext } from "./productContext";
import PropTypes from "prop-types";
import productData from "../products.json";
import { useState } from "react";

export default function ProductContextProvider({children}){
    const data = productData.products;
    const [cartData, setCartData] = useState({totalQuantity: 0, totalPrice: 0})
    function handleCart(id){
        const item = data.find((product) => product.id === id);
        setCartData({...cartData, totalQuantity: cartData.totalQuantity + 1, totalPrice: cartData.totalPrice + item.price})
    }
    return(
        <productContext.Provider value={{data, handleCart, cartData}}>
            {children}
        </productContext.Provider>
    )
}

ProductContextProvider.propTypes = {
    children: PropTypes.object
}