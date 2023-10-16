import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./gitHub/github.api";

export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gitHubApi.middleware),
});
