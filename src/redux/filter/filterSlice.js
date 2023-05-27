import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "647115581d1d7bace03e91f7" };

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
