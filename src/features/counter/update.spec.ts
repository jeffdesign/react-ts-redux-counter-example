import counterReducer, {
  increment,
  decrement,
  decrementIfPositive,
  incrementByAmount,
  incrementIfFizzBuzz,
  reset,
  noOp,
} from "./update";

import { initialState } from "./update";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 1,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(2);
  });

  it("should handle decrement", () => {
    const actual = counterReducer({ ...initialState, value: 2 }, decrement());
    expect(actual.value).toEqual(1);
  });

  it("should not be able to go below count 1", () => {
    const actual = counterReducer(initialState, <any>decrementIfPositive());
    expect(actual.value).toEqual(1);
  });

  it("should handle incrementByAmount", () => {
    const actual = counterReducer(initialState, incrementByAmount(5));
    expect(actual.value).toEqual(6);
  });

  it("reset function should put us in initial state", () => {
    const actual = counterReducer({ ...initialState, value: 10 }, reset());
    expect(actual.value).toEqual(1);
  });

  it("noOp function should return current model", () => {
    const randomState = { ...initialState, value: 15 };
    const actual = counterReducer(randomState, noOp(randomState.value));
    expect(actual.value).toEqual(randomState.value);
  });
});

describe("should handle fizz buzz", () => {
  //  AppThunk functions isn't meant to be tested this way
  it("num isnt fizzbuzz, shouldnt be able to increment count", () => {
    const actual = counterReducer(initialState, <any>incrementIfFizzBuzz(1));
    expect(actual.value).toEqual(1);
  });
});
