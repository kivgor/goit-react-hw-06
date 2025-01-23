import initPhonebook from '../initialList.json';
import { addContact, deleteContact } from './actions';

const initialState = {
  contacts: {
    items: initPhonebook,
  },
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type: {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }

    case deleteContact.type: {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    }

    default:
      return state;
  }
};
