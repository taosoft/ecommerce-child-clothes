import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Sale from '../../models/sale';

interface SaleState {
  sales: Sale[];
}

const initialState: SaleState = {
  sales: [],
};

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    addSale: (state, action: PayloadAction<Sale>) => {
      state.sales = [...state.sales, action.payload];
    },
    loadSales: (state, action: PayloadAction<Sale[]>) => {
      state.sales = action.payload;
    }
  },
});

export const { addSale, loadSales } = saleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSales = (state: RootState) => state.sale.sales;

export default saleSlice.reducer;
