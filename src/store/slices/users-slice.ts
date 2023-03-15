import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UsersApi } from "../../interactors/users-api";
import { User, UserPreview } from "../../models/models";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page: number) => {
    const res = await UsersApi.getAll(page);
    const data = (await res.json()) as User[];
    const count = res.headers.get("X-Total-Count");
    return { data, count: Number(count) };
  }
);

export const addUser = createAsyncThunk("users/add", async (user: User) => {
  const res = await UsersApi.addOne(user);
  return await res.json();
});

export interface UsersState {
  list: UserPreview[];
  totalOfUsers: number;
  loading: "idle" | "loading" | "succeded" | "failed";
}

const initialState: UsersState = {
  list: [],
  totalOfUsers: 0,
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
      const { data, count } = action.payload;
      state.list = data.map((p) => ({
        id: p.id,
        completeName: `${p.names} ${p.firstLastname} ${p.secondLastname}`,
        email: p.email,
        gender: p.gender,
      }));
      state.totalOfUsers = count;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = "failed";
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
export default usersSlice.reducer;
