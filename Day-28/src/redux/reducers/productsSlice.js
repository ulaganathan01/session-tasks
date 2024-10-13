import { createSlice } from "@reduxjs/toolkit";
import productData from "../../products.json";

const initialState = [];
const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        fetchProducts(){
            return productData.products
        }
    }

})

export const {fetchProducts} = productsSlice.actions;
export default productsSlice.reducer;