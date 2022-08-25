import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import { api } from "../lib/axios";

interface Data {
  product: string;
  quantity: number;
  price: string;
  type: string;
  industry: string;
  origin: string;
}

type Products = {
  data: Data[];
};

const initialState: Products = {
  data: [],
};

export const getProducts = createAsyncThunk("data", async (query?: string) => {
  return await api
    .get("data", {
      params: {
        q: query,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setData(state, { payload }) {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {}),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.data = payload;
      });
  },
});

export default productsSlice.reducer;
export const { setData } = productsSlice.actions;
export const productsSelector = (state: RootState) => state.products.data;
