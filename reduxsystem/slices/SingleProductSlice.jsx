import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


// data
const data = {
    singlePrdouct: [],
    loadingSingleProduct: true,
    errorSingleProduct: null
}

// Getting products Function
export const getSingleProduct = createAsyncThunk("getsingleproduct", async(id, thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try {
        const res = await axios ({
            method: "get",
            url: `https://dummyjson.com/products/${id}`
        })
        return res.data;
       
    } catch(er){
        return rejectWithValue(er)
    }
})

// Create Slice
const SingleProductSlice = createSlice({
    name: "SingleProduct",
    initialState: data,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getSingleProduct.pending, (state, action)=>{
            state.loadingSingleProduct = true;
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action)=>{
            state.loadingSingleProduct = false;
            state.singlePrdouct = action.payload;
        })
        builder.addCase(getSingleProduct.rejected, (state, action)=>{
            state.loadingSingleProduct = false;
            state.errorSingleProduct = action.payload;
        })

    }
})

export const SingleProd = SingleProductSlice.reducer;