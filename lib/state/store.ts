import { configureStore } from "@reduxjs/toolkit";

// Import reducers here

import rootReducer from './rootSlice';

const store = configureStore({
  reducer: {
    root: rootReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
