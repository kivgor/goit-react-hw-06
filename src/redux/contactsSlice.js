import { createSlice } from '@reduxjs/toolkit';
import initPhonebook from '../initialList.json';

const initialState = {
  contacts: {
    items: initPhonebook,
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    },
  },
});
export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
