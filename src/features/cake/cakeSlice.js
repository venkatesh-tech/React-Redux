import { createSlice } from "@reduxjs/toolkit";
// const createSlice = require("@reduxjs/toolkit").createSlice;
//Action
const initialState = {
  numOfCakes: 10,
};
//Reducer
const cakeSlice = createSlice({
  name: "cake",
  //   initialState:initialState
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions;
export const { ordered, restocked } = cakeSlice.actions;
