import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Sale from '../../models/sale';
import { createSale, getSales } from '../../services/sales.service';
import { AppThunk, RootState } from '../store';

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
    createSaleSuccess: (state, action: PayloadAction<Sale>) => {
      state.sales = [...state.sales, action.payload];
    },
    loadSalesSuccess: (state, action: PayloadAction<Sale[]>) => {
      state.sales = action.payload;
    },
    loadSalesFailed: (state) => {
      state.sales = [];
    }
  },
});

export const { createSaleSuccess, loadSalesSuccess, loadSalesFailed } = saleSlice.actions;

export const loadSales = (token: string): AppThunk => dispatch => {
  getSales(token)
    .then(response => dispatch(loadSalesSuccess(response.data.data)))
    .catch(() => dispatch(loadSalesFailed()));
};

export const addNewSale = (sale: Sale, token: string): AppThunk => dispatch => {
  createSale(sale, token)
    .then(response => dispatch(createSaleSuccess(response.data.createdSale)))
    .catch((error) => console.log(error));
};

export const selectSales = (state: RootState) => state.sale.sales;

export default saleSlice.reducer;
