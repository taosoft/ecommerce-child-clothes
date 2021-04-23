import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './stores/counterSlice';
import landingProductReducer from './stores/landingProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingProducts: landingProductReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
