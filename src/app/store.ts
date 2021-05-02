import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './stores/counterSlice';
import landingProductReducer from './stores/landingProductSlice';
import authReducer from './stores/authSlice';
import cartReducer from './stores/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingProducts: landingProductReducer,
    auth: authReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
