import { changeFilter } from './actions';

const initialState = {
  filters: { name: '' },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeFilter.type: {
      return {
        ...state,
        filters: { name: action.payload },
      };
    }

    default:
      return state;
  }
};
