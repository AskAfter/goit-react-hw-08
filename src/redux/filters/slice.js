import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: { name: '' },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilter } = slice.actions;
