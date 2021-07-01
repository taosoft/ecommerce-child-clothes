import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { create, login } from '../../services/user.service';
import AuthorizedUser from '../../models/authorizedUser';
interface AuthState {
  failed: boolean;
  loading: boolean;
  loggedUser: AuthorizedUser | null;
  isLogged: boolean;

  createdUser: boolean
}

const initialState: AuthState = {
  loggedUser: null,
  failed: false,
  loading: false,
  isLogged: false,
  createdUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUserSuccess: (state, action: PayloadAction<AuthorizedUser | null>) => {
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
    addUserSuccess: (state) => {
      state.loading = false;
      state.createdUser = true;
    },
    loadingAddUser: (state) => {
      state.loading = true;
      state.failed = false;
      state.isLogged = false;
    },
    addUserFailed: (state) => {
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

export const { loadUserFailed, loadUserSuccess, loadingLogout, loadingUser, logoutFailed, logoutSuccess, loadingAddUser, addUserFailed, addUserSuccess } = authSlice.actions;

export const loginUser = (email: string, password: string): AppThunk => dispatch => {
  dispatch(loadingUser());
  login(email, password)
    .then(response => dispatch(loadUserSuccess(response.data.loginUser)))
    .catch(() => dispatch(loadUserFailed()));
};

export const createUser = (firstName: string, lastName: string, email: string, password: string): AppThunk => dispatch => {
  dispatch(loadingAddUser());
  create(firstName, lastName, email, password)
    .then(() => dispatch(addUserSuccess()))
    .catch(() => addUserFailed())
}

export const logoutUser = (): AppThunk => dispatch => {
  dispatch(logoutSuccess());
};

export const selectIsLogged = (state: RootState) => state.auth.isLogged;
export const selectLoggedUser = (state: RootState) => state.auth.loggedUser;
export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectIsCreatedUser = (state: RootState) => state.auth.createdUser;

export default authSlice.reducer;