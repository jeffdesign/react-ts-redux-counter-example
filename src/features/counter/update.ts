import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    noOp: (state) => {
      state.value = state.value;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset, noOp } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const incrementIfFizzBuzz =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 3 === 0 && currentValue % 5 === 0) {
      dispatch(incrementByAmount(amount));
    } else if (currentValue % 3 === 0) {
      dispatch(incrementByAmount(amount));
    } else if (currentValue % 5 === 0) {
      dispatch(incrementByAmount(amount));
    } else {
      dispatch(noOp());
    }
  };

export const decrementIfPositive = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue > 0) {
    dispatch(decrement());
  } else {
    dispatch(noOp());
  }
};

export default counterSlice.reducer;
