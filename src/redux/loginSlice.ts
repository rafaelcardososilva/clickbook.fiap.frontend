import { createSlice } from '@reduxjs/toolkit';
import { api, LOGIN_URL } from '../utils/apis';
import { AppDispatch, RootState } from './store';

export const slice = createSlice({
  name: 'login',
  initialState: {
    user: {},
    isLogged: false,
    isLoading: false,
    isFailure: false,
  },
  reducers: {
    signInRequest: (state) => {
      return {
        ...state,
        isLoading: true,
        isFailure: false,
      }
    },
    signInFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        isFailure: true,
      }
    },
    signInSuccess: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        isLogged: true,
        isLoading: false,
      };
    },
    logout: (state) => {
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    },
  },
});

export const selectLogin = (state: RootState) => state.login;

export const { logout, signInRequest, signInFailure, signInSuccess } = slice.actions;

export function signIn(email: string, password: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(signInRequest());

    const payload = {
      email,
      senha: password,
    }
    try {
      await api.post(LOGIN_URL, payload);

      dispatch(signInSuccess({
        name: 'teste',
        email,
      }))
    } catch (error) {
      dispatch(signInFailure());
    }

  };
}

export default slice.reducer;
