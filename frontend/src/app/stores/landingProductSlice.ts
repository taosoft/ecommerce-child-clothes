import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { getLandingPageProducts } from '../../services/product.service';
import Product from '../../models/product';

interface LandingProductState {
  products: Product[];
  failed: boolean;
  loading: boolean;
}

const initialState: LandingProductState = {
  products: [],
  failed: false,
  loading: false
};

export const landingProductSlice = createSlice({
  name: 'landingProduct',
  initialState,
  reducers: {
    loadProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    loadingProducts: (state) => {
      state.loading = true;
      state.failed = false;
    },
    loadProductsFailed: (state) => {
      state.products = [];
      state.failed = true;
      state.loading = false;
    }
  },
});

export const { loadProductsSuccess, loadProductsFailed, loadingProducts } = landingProductSlice.actions;

export const loadLandingPageProducts = (): AppThunk => dispatch => {
  dispatch(loadingProducts());
  getLandingPageProducts()
    .then(response => dispatch(loadProductsSuccess(response.data.data)))
    .catch(() => dispatch(loadProductsFailed()));
};

export const selectLandingPageProducts = (state: RootState) => state.landingProducts.products;

export default landingProductSlice.reducer;
