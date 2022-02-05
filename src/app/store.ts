import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import update from "../features/counter/update";

export const store = configureStore({
  reducer: {
    counter: update,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
