import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StockProduct } from '../../models/stockProduct';
import { getStockProducts, createStockProduct, updateProductStock, deleteStockProduct } from '../../services/product.service';
import { AppThunk, RootState } from '../store';
import { remove } from 'lodash';

interface StockState {
  products: StockProduct[],
  loading: boolean
}

const initialState: StockState = {
  products: [],
  loading: false
};

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addProductSuccess: (state, action: PayloadAction<StockProduct>) => {
      state.products = [...state.products, action.payload];
    },
    updateProductStockSuccess: (state, action: PayloadAction<StockProduct>) => {
      let stockProduct = state.products.find(product => product.product._id === action.payload.product?._id);
      if (stockProduct) {
        stockProduct.quantity = action.payload.quantity;
        stockProduct.product = action.payload.product!;
      }
    },
    deleteProductStockSuccess: (state, action: PayloadAction<String>) => {
      let products = remove(state.products, (product: StockProduct) => product._id === action.payload);
      state.products = products;
    },
    loadProducts: (state, action: PayloadAction<StockProduct[]>) => {
      state.products = action.payload;
      state.loading = false
    },
    loadProductsFailed: (state) => {
      state.products = []
      state.loading = false
    },
    loadingProducts: (state) => {
      state.loading = true
    },
  },
});

export const {
  loadProducts,
  loadProductsFailed,
  addProductSuccess,
  updateProductStockSuccess,
  deleteProductStockSuccess,
  loadingProducts,
} = stockSlice.actions;

export const loadStockProducts = (): AppThunk => dispatch => {
  dispatch(loadingProducts())
  getStockProducts()
    .then(response => dispatch(loadProducts(response.data.data)))
    .catch(() => dispatch(loadProductsFailed()));
};

export const addStockProduct = (productDescription: any): AppThunk => dispatch => {
  createStockProduct(productDescription)
    .then(response => dispatch(addProductSuccess(response.data.data)))
    .catch(() => dispatch(loadProductsFailed()));
};

export const updateStockProduct = (productDescription: any): AppThunk => dispatch => {
  updateProductStock(productDescription)
    .then(response => dispatch(updateProductStockSuccess(response.data.updatedStock)))
    .catch((error) => console.log(error));
};

export const deleteProductStock = (productDescription: any): AppThunk => dispatch => {
  deleteStockProduct(productDescription)
    .then(response => dispatch(deleteProductStockSuccess(response.data.deletedStockId)))
    .catch((error) => console.log(error));
};

export const selectStock = (state: RootState) => state.stock.products;
export const selectIsLoading = (state: RootState) => state.stock.loading;

export default stockSlice.reducer;
