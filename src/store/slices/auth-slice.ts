import { createSlice } from "@reduxjs/toolkit";

export interface UsersState {
  isLogged: boolean;
  loading: "idle" | "loading" | "succeded" | "failed";
}

const initialState: UsersState = {
  isLogged: false,
  loading: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      localStorage.setItem("token", "q2134qwedadassdasdafa");
      state.isLogged = true;
    },
    checkLoginState(state) {
      if (localStorage.getItem("token")) {
        state.isLogged = true;
      }
    },
    logout(state) {
      localStorage.removeItem("token");
      state.isLogged = false;
    },
    resetLoadingState(state) {
      state.loading = "idle";
    },
  },
});

export const { login, checkLoginState, logout, resetLoadingState } =
  authSlice.actions;
export default authSlice.reducer;
