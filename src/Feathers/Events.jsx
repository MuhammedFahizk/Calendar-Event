import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  events: [],
};
const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    addToEvents(state, action) {
      state.events.push(action.payload);
    },
  },
});

export const { addToEvents } = eventSlice.actions;
export default  eventSlice.reducer