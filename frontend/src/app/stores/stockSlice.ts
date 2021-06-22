import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartProduct from '../../models/cartProduct';
import { StockProduct } from '../../models/stockProduct';
import { getStockProducts, createStockProduct, updateProductStock } from '../../services/product.service';
import { AppThunk, RootState } from '../store';

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
      stockProduct!.quantity = stockProduct!.quantity - action.payload.quantity;
      //Revisar
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
    .then(response => dispatch(updateProductStockSuccess(response.data.data)))
    .catch((error) => console.log(error));
};

export const selectStock = (state: RootState) => state.stock.products;

export default stockSlice.reducer;
