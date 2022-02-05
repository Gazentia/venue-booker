import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    roomList: ["A101", "A102", "Auditorium"],
    events: [],
    roomId: "A101",
    changed: false,
  },
  reducers: {
    replaceBooking(state, action) {
      state.events = action.payload.events;
      state.roomId = action.payload.roomId;
    },
  },
});

export const bookingActions = bookingSlice.actions;

export default bookingSlice;
