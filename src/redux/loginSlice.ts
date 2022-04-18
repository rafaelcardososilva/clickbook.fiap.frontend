import { createSlice } from '@reduxjs/toolkit';
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
    signIn: (state, { payload }) => {
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

export const { logout, signInRequest, signIn } = slice.actions;

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function asyncSignIn(email: string, password: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(signInRequest());
    await sleep(3000);
    dispatch(
      signIn({
        name: email,
      })
    );
  };
}

export default slice.reducer;
