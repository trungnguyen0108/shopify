import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProducts = createAsyncThunk('products/getDataProducts', async () => {
  try {
    const res = await axios.get("https://77ad5c704c39a2bc6d2b3a0555860084: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@trungnguyen-apps.myshopify.com/admin/api/2022-07/products.json")
    console.log(res);
    return res.data
  } catch (error) { }
})

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        loading: false,
        success: false
      }
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getDataProducts.pending, (state) => {
        return {
          loading: true
        }
      })
      .addCase(getDataProducts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          loading: false,
          products: payload.products,
        }
      })
  }
})

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;