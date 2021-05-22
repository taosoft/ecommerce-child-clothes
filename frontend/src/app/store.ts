import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stockReducer from './stores/stockSlice';
import landingProductReducer from './stores/landingProductSlice';
import authReducer from './stores/authSlice';
import cartReducer from './stores/cartSlice';
import salesReducer from './stores/salesSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
    landingProducts: landingProductReducer,
    auth: authReducer,
    cart: cartReducer,
    sale: salesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
