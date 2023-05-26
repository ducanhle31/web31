import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      state.value++;
    },
    decrement(state, action) {
      state.value--;
    },
  },
});

const counterReducer = counterSlice.reducer;

export default counterReducer;
export const counterActions = counterSlice.actions;

export const useCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return {
    counter,
    increment() {
      dispatch(counterActions.increment());
    },
    decrement() {
      dispatch(counterActions.decrement());
    },
  };
};
