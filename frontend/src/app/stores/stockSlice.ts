import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartProduct from '../../models/cartProduct';
import { StockProduct } from '../../models/stockProduct';
import { getStockProducts, createStockProduct, updateProductStock, deleteStockProduct } from '../../services/product.service';
import { AppThunk, RootState } from '../store';
import { remove } from 'lodash';

interface StockState {
  products: StockProduct[]
}

const initialState: StockState = {
  products: [],
};

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addProductSuccess: (state, action: PayloadAction<StockProduct>) => {
      state.products = [...state.products, action.payload];
    },
    updateProductStockSuccess: (state, action: PayloadAction<CartProduct>) => {
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
    },
    loadProductsFailed: (state) => {
      state.products = []
    },
  },
});

export const {
  loadProducts,
  // addProduct,
  // updateProductStock, 
  // loadProductsSuccess, 
  loadProductsFailed,
  addProductSuccess,
  // addProductFailed, 
  updateProductStockSuccess,
  deleteProductStockSuccess,
} = stockSlice.actions;

export const loadStockProducts = (): AppThunk => dispatch => {
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

export default stockSlice.reducer;
