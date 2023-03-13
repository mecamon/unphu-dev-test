import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../index";
import { UsersApi } from "../../interactors/users-api";
import { User, UserPreview } from "../../models/models";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const data = await UsersApi.getAll();
  return data as User[];
});

export const addUser = createAsyncThunk("users/add", async (user: User) => {
  const data = await UsersApi.addOne(user);
  return data;
});

export interface UsersState {
  list: UserPreview[];
  loading: "idle" | "loading" | "succeded" | "failed";
}

const initialState: UsersState = {
  list: [],
  loading: "idle",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetLoadingState(state) {
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.list = action.payload.map((p) => ({
        id: p.id,
        completeName: `${p.names} ${p.firstLastname} ${p.secondLastname}`,
        email: p.email,
        gender: p.gender,
      }));
    });
    builder.addCase(addUser.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(addUser.fulfilled, (state) => {
      state.loading = "succeded";
    });
  },
});

export const { resetLoadingState } = usersSlice.actions;
export const selectUsersState = (state: AppState) => state.users.list;
export default usersSlice.reducer;
