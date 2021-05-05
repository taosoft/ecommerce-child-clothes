import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import SalesProduct from '../../models/salesProduct';

interface SaleState {
  products: SalesProduct[];
}

const initialState: SaleState = {
  products: [],
};

export const saleSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    addSoldProduct: (state, action: PayloadAction<SalesProduct>) => {
        state.products = [...state.products, action.payload];
      }
  },
});

export const { addSoldProduct } = saleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSales = (state: RootState) => state.sales.products;

export default saleSlice.reducer;
