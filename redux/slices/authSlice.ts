import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      localStorage.setItem("user", action.payload.phone);
      state.authenticated = true;
    },
    signout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
