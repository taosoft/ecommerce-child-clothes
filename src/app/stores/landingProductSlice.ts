import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

const featuredPosts: Product[] = [
  {
    id: "1",
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "2",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "3",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: "4",
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  }
];

interface Product {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  imageText: string;
}

interface LandingProductState {
  products: Product[];
}

const initialState: LandingProductState = {
  products: [],
};

export const landingProductSlice = createSlice({
  name: 'landingProduct',
  initialState,
  reducers: {
    get: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { get } = landingProductSlice.actions;

export const setProducts = (products: Product[]): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(get(products));
  }, 500);
};

export const selectProducts = (state: RootState) => state.landingProducts.products;

export default landingProductSlice.reducer;
