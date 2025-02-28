import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactFormReducer,
    filter: filterReducer,
  },
});
