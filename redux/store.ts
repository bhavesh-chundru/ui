import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import bookingDataSlice from "./slices/bookingDataSlice";

export const store = configureStore({
  reducer: {
    bookingData: bookingDataSlice,
    auth: authSlice,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
