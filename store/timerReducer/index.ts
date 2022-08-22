import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { time } from "console";

export interface TimerState {
  data: [object, object, object];
}
const initialState: TimerState = {
  data: [
    { key: "promodoro", number: 100, active: true, min: 0, max: 100 },
    {
      number: 0,
      active: false,
      min: 0,
      max: 100,
      key: "short break",
    },
    {
      key: "long break",
      number: 0,
      active: false,
      min: 0,
      max: 100,
    },
  ],
};
export const timer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetData: (state) => {
      //   state.data = null;
    },
  },
});

export const { resetData } = timer.actions;
export default timer.reducer;
