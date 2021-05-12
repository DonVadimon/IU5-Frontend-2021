/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GITHUBAPIHEADERS from "../GITHUBAPIHEADERS";
import FetchStatuses from "../FetchStatuses";
import { IGitRepo, IGitRepoSlice, INoReposError } from "./types";

const initialState: IGitRepoSlice = {
  repos: [],
  status: FetchStatuses.idle,
  error: undefined,
};

export const fetchRepos = createAsyncThunk<
  IGitRepo[],
  string,
  { rejectValue: INoReposError }
>("REPOS/FETCH_REPOS", async (url: string, thunkAPI) => {
  const response = await fetch(url, {
    method: "GET",
    headers: GITHUBAPIHEADERS,
  });
  const data = await response.json();
  return "message" in data
    ? thunkAPI.rejectWithValue(data as INoReposError)
    : (data as IGitRepo[]);
});

const ReposSlice = createSlice({
  name: "ReposSlice",
  initialState,
  reducers: {
    clearRepos: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.pending, (state) => {
      state.status = FetchStatuses.idle;
    });
    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.status = FetchStatuses.succeeded;
      state.repos = action.payload;
    });
    builder.addCase(fetchRepos.rejected, (state, action) => {
      state.error = action.payload?.message;
      state.status = FetchStatuses.failed;
    });
  },
});

export default ReposSlice.reducer;
export const { clearRepos } = ReposSlice.actions;
