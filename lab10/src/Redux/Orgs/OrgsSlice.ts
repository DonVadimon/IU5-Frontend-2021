/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GITHUBAPIHEADERS from "../GITHUBAPIHEADERS";
import FetchStatuses from "../FetchStatuses";
import { IGitOrg, IGitOrgsSlice, INoOrgsError } from "./types";

const initialState: IGitOrgsSlice = {
  orgs: [],
  status: FetchStatuses.idle,
  error: undefined,
};

export const fetchOrgs = createAsyncThunk<
  IGitOrg[],
  string,
  { rejectValue: INoOrgsError }
>("ORGS/FETCH_ORGS", async (url: string, thunkAPI) => {
  const response = await fetch(url, {
    method: "GET",
    headers: GITHUBAPIHEADERS,
  });
  const data = await response.json();
  return "message" in data
    ? thunkAPI.rejectWithValue(data as INoOrgsError)
    : (data as IGitOrg[]);
});

const OrgsSlice = createSlice({
  name: "OrgsSlice",
  initialState,
  reducers: {
    clearOrgs: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrgs.pending, (state) => {
      state.status = FetchStatuses.idle;
    });
    builder.addCase(fetchOrgs.fulfilled, (state, action) => {
      state.status = FetchStatuses.succeeded;
      state.orgs = action.payload;
    });
    builder.addCase(fetchOrgs.rejected, (state, action) => {
      state.error = action.payload?.message;
      state.status = FetchStatuses.failed;
    });
  },
});

export default OrgsSlice.reducer;
export const { clearOrgs } = OrgsSlice.actions;
