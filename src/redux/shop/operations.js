import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, searchProducts } from "../../api/products";

export const apiGetProducts = createAsyncThunk(
  "shop/getProducts",
  async (_, thunkApi) => {
    // dispatch({ type: "shop/getProducts/pending" })
    try {
      const data = await getProducts({ limit: 10 });

      return data;
      // dispatch({ type: "shop/getProducts/fulfilled", payload: data })
    } catch (error) {
      // return error.message;
      // dispatch({ type: "shop/getProducts/rejected", payload: error.message })
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetProductsByQuery = createAsyncThunk(
  "shop/getProductsByQuery",
  async (searchValue, thunkApi) => {
    try {
      const data = await searchProducts(searchValue);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
