import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users-slice";

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
  },
  devTools: true,
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
