import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { login } from '../../services/user.service';
import User from '../../models/user';

interface AuthState {
  failed: boolean;
  loading: boolean;
  loggedUser: User | null;
  isLogged: boolean;
}

const initialState: AuthState = {
  loggedUser: null,
  failed: false,
  loading: false,
  isLogged: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUserSuccess: (state, action: PayloadAction<User | null>) => {
      state.loggedUser = action.payload;
      state.loading = false;
      state.isLogged = true;
    },
    loadingUser: (state) => {
      state.loading = true;
      state.failed = false;
      state.isLogged = false;
    },
    loadUserFailed: (state) => {
      state.loggedUser = null;
      state.failed = true;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.isLogged = false;
      state.loggedUser = null;
      state.loading = false;
    },
    loadingLogout: (state) => {
      state.loading = true;
    },
    logoutFailed: (state) => {
      state.failed = true;
    }
  },
});

export const { loadUserFailed, loadUserSuccess, loadingLogout, loadingUser, logoutFailed, logoutSuccess } = authSlice.actions;

export const loginUser = (email: string, password: string): AppThunk => dispatch => {
  dispatch(loadingUser());
  login(email, password)
    .then(response => dispatch(loadUserSuccess(response.data)))
    .catch(() => dispatch(loadUserFailed()));
};

export const logoutUser = () : AppThunk => dispatch => {
  // dispatch(logoutUser()); //Cuando peguemos a api
  dispatch(logoutSuccess());
};

export const selectIsLogged = (state: RootState) => state.auth.isLogged;
export const selectLoggedUser = (state: RootState) => state.auth.loggedUser;
export const selectIsLoading = (state: RootState) => state.auth.loading;

export default authSlice.reducer;