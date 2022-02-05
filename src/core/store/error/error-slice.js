import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    errorVisible: false,
    errorTitle: null,
    errorMessage: null,
  },
  reducers: {
    toggle(state) {
      state.errorVisible = !state.errorVisible;
    },
    showError(state, action) {
      state.errorTitle = action.payload.errorTitle;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
