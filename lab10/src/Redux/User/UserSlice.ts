/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GITHUBAPIHEADERS from "../../components/GITHUBAPIHEADERS";
import FetchStatuses from "../FetchStatuses";
import { IGitUser, IGitUserSlice, INoUserError } from "./types";

const initialState: IGitUserSlice = {
  user: {
    avatar_url: "",
    blog: "",
    followers: 0,
    following: 0,
    html_url: "",
    location: "",
    login: "",
    name: "",
    public_repos: 0,
    repos_url: "",
    organizations_url: "",
  },
  status: FetchStatuses.idle,
  error: undefined,
};

export const fetchUser = createAsyncThunk<
  IGitUser,
  string,
  { rejectValue: INoUserError }
>("USER/FETCH_USER", async (username: string, thunkAPI) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
    headers: GITHUBAPIHEADERS,
  });
  const data = await response.json();
  return "message" in data
    ? thunkAPI.rejectWithValue(data as INoUserError)
    : (data as IGitUser);
});

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = FetchStatuses.idle;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = FetchStatuses.succeeded;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.payload?.message;
      state.status = FetchStatuses.failed;
    });
  },
});

export default UserSlice.reducer;
export const { clearUser } = UserSlice.actions;
