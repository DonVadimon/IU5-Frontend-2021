import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User/UserSlice";
import ReposReducer from "./Repos/ReposSlice";
import OrgsReducer from "./Orgs/OrgsSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    repos: ReposReducer,
    orgs: OrgsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
