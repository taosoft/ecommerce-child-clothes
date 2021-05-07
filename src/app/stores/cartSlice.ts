import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import CartProduct from '../../models/cartProduct';

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
    }
  },
});

export const { addCartProduct } = cartSlice.actions;

export const selectCartCount = (state: RootState) => state.cart.products.length;
export const selectCartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
