import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './counter/reducer';

export const store = configureStore({
  reducer: { contacts: contactReducer },
});
