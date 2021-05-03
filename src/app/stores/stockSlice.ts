import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface stockState {
  value: number;
}

const initialState: stockState = {
  value: 10,
};

export const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setStock: (state, action) => {
        state.value = action.payload;
    },
    increment: state => {
        state.value += 1
    },
    decrement: (state, action) => {
        state.value -= action.payload;
    }
  },
});

export const { setStock, decrement } = stockSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStock = (state: RootState) => state.stock.value;

export default stockSlice.reducer;
