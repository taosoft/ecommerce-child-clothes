import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartProduct from '../../models/cartProduct';
import { StockProduct } from '../../models/StockProduct';
import { RootState } from '../store';

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
    addProduct: (state, action:PayloadAction<StockProduct>) => {
        state.products = [...state.products, action.payload];
    },
    updateProductStock: (state, action:PayloadAction<CartProduct>) => {
        let stockProduct = state.products.find(product => product.product.id === action.payload.product?.id);
        stockProduct!.quantity = stockProduct!.quantity - action.payload.quantity;
        //Revisar
    },
    loadProducts: (state, action:PayloadAction<StockProduct[]>) => {
        state.products = action.payload;
    }
  },
});

export const { 
  loadProducts, 
  addProduct,
  updateProductStock, 
  // loadProductsSuccess, 
  // loadProductsFailed, 
  // addProductSuccess, 
  // addProductFailed, 
  // updateProductStockSuccess, 
  // updateProductStockFailed 
} = stockSlice.actions;

export const selectStock = (state: RootState) => state.stock.products;

export default stockSlice.reducer;
