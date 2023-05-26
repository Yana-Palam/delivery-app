import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 1 };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setValueFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setValueFilter } = filterSlice.actions;
export default filterSlice.reducer;
