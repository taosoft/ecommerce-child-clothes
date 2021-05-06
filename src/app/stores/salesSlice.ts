import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import SalesProduct from '../../models/salesProduct';

interface SaleState {
  sales: SalesProduct[];
}

const initialState: SaleState = {
  sales: [],
};

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    addSoldProduct: (state, action: PayloadAction<SalesProduct>) => {
        state.sales = [...state.sales, action.payload];
      }
  },
});

export const { addSoldProduct } = saleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSales = (state: RootState) => state.sale.sales;

export default saleSlice.reducer;
