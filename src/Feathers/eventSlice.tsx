import { createSlice } from "@reduxjs/toolkit";
function generateUniqueId() {
    // Generate a random string or use any other method to create a unique ID
    return Math.random().toString(36).substr(2, 9);
  }
  
const initialState = {
  events: [],
};
const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    addToEvents(state, action) {
        state.events.push({ ...action.payload, id: generateUniqueId() });
    },
    removeEvent(state, action) {
        const eventId = action.payload.id
        state.events = state.events.filter((event) => event.id !== eventId)
    }
  },
});

export const { addToEvents, removeEvent } = eventSlice.actions;
export default  eventSlice.reducer