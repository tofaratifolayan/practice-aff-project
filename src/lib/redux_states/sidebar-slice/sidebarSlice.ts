import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
