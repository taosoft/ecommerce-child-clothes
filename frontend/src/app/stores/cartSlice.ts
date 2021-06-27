import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import CartProduct from '../../models/cartProduct';
import { remove } from 'lodash';

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<CartProduct>) => {
      state.products = [...state.products, action.payload];
    },
    clearCart: (state) => {
      state.products = [];
    },
    updateCartProductSuccess: (state, action: PayloadAction<CartProduct>) => {
      let stockProduct = state.products.find(product => product?.product?._id === action.payload.product?._id);
      if (stockProduct) {
        stockProduct.quantity = action.payload.quantity;
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<String>) => {
      if (state.products.length === 1 && state.products[0].product?._id === action.payload) {
        state.products = [];
      }
      else {
        let products = remove(state.products, (product: CartProduct) => product?.product?._id === action.payload);
        state.products = products;
      }
    }
  },
});

export const { addCartProduct, clearCart, updateCartProductSuccess, deleteProductFromCart } = cartSlice.actions;

export const selectCartCount = (state: RootState) => state.cart.products.length;
export const selectCartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
