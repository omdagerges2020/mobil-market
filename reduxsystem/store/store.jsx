import { configureStore } from "@reduxjs/toolkit";
import {homeProducts} from "../slices/homeProductsSlice";
import { allCategories } from "../slices/CategoriesSlice";


const store = configureStore({
    reducer: {homeProducts, allCategories}
})

export default store;