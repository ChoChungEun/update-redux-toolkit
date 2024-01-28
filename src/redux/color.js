import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const colorSlice = createSlice({
  name: "color",
  initialState: { color: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      console.log("state", state);
      console.log("action", action);

      state.color = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
