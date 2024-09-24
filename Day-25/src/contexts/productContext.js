import { createContext } from "react";

export const productContext = createContext({
    productData: [],
    handleCart: () => {},
    cartData: {}
});

