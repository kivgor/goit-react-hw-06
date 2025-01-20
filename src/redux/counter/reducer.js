import initPhonebook from '../../initialList.json';

const initialState = {
  contacts: {
    items: initPhonebook,
  },
  filters: { name: '' },
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addContact': {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case 'deleteContact': {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            contact => contact.id !== action.payload
          ),
        },
      };
    }
    case 'changeFilter': {
      return {
        ...state,
        filters: action.payload,
      };
    }
    default:
      return state;
  }
};
