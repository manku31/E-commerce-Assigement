import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchAllColors,
  fetchAllMaterials,
} from "./productApi";

const initialState = {
  products: [],
  colors: [],
  materials: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    return response;
  }
);

export const fetchAllColorsAsync = createAsyncThunk(
  "product/fetchAllColors",
  async (filter) => {
    const response = await fetchAllColors(filter);
    return response;
  }
);

export const fetchAllMaterialsAsync = createAsyncThunk(
  "product/fetchAllMaterials",
  async (filter) => {
    const response = await fetchAllMaterials(filter);

    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch All Products
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })

      // fetch filter Products
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })

      // fetch All colors
      .addCase(fetchAllColorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllColorsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.colors = action.payload;
      })

      // fetch All materials
      .addCase(fetchAllMaterialsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllMaterialsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.materials = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectAllColors = (state) => state.product.colors;
export const selectAllMaterials = (state) => state.product.materials;

export default productSlice.reducer;
