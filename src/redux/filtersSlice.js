import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: { name: '' },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        filters: { name: action.payload },
      };
    },
  },
});
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
